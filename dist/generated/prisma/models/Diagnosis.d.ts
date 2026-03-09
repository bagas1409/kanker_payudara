import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Diagnosis
 *
 */
export type DiagnosisModel = runtime.Types.Result.DefaultSelection<Prisma.$DiagnosisPayload>;
export type AggregateDiagnosis = {
    _count: DiagnosisCountAggregateOutputType | null;
    _avg: DiagnosisAvgAggregateOutputType | null;
    _sum: DiagnosisSumAggregateOutputType | null;
    _min: DiagnosisMinAggregateOutputType | null;
    _max: DiagnosisMaxAggregateOutputType | null;
};
export type DiagnosisAvgAggregateOutputType = {
    age_at_diagnosis: number | null;
    cohort: number | null;
    neoplasm_histologic_grade: number | null;
    lymph_nodes_examined_positive: number | null;
    mutation_count: number | null;
    nottingham_prognostic_index: number | null;
    overall_survival_months: number | null;
    relapse_free_status_months: number | null;
    tumor_size: number | null;
    tumor_stage: number | null;
};
export type DiagnosisSumAggregateOutputType = {
    age_at_diagnosis: number | null;
    cohort: number | null;
    neoplasm_histologic_grade: number | null;
    lymph_nodes_examined_positive: number | null;
    mutation_count: number | null;
    nottingham_prognostic_index: number | null;
    overall_survival_months: number | null;
    relapse_free_status_months: number | null;
    tumor_size: number | null;
    tumor_stage: number | null;
};
export type DiagnosisMinAggregateOutputType = {
    id: string | null;
    diagnosis_code: string | null;
    patientId: string | null;
    doctorId: string | null;
    age_at_diagnosis: number | null;
    type_of_breast_surgery: string | null;
    cancer_type: string | null;
    cancer_type_detailed: string | null;
    cellularity: string | null;
    chemotherapy: string | null;
    pam50_subtype: string | null;
    cohort: number | null;
    er_status_ihc: string | null;
    er_status: string | null;
    neoplasm_histologic_grade: number | null;
    her2_status_snp6: string | null;
    her2_status: string | null;
    tumor_histologic_subtype: string | null;
    hormone_therapy: string | null;
    menopausal_state: string | null;
    integrative_cluster: string | null;
    tumor_laterality: string | null;
    lymph_nodes_examined_positive: number | null;
    mutation_count: number | null;
    nottingham_prognostic_index: number | null;
    oncotree_code: string | null;
    overall_survival_months: number | null;
    overall_survival_status: string | null;
    pr_status: string | null;
    radio_therapy: string | null;
    relapse_free_status_months: number | null;
    sex: string | null;
    gene_classifier_subtype: string | null;
    tumor_size: number | null;
    tumor_stage: number | null;
    patient_vital_status: string | null;
    createdAt: Date | null;
};
export type DiagnosisMaxAggregateOutputType = {
    id: string | null;
    diagnosis_code: string | null;
    patientId: string | null;
    doctorId: string | null;
    age_at_diagnosis: number | null;
    type_of_breast_surgery: string | null;
    cancer_type: string | null;
    cancer_type_detailed: string | null;
    cellularity: string | null;
    chemotherapy: string | null;
    pam50_subtype: string | null;
    cohort: number | null;
    er_status_ihc: string | null;
    er_status: string | null;
    neoplasm_histologic_grade: number | null;
    her2_status_snp6: string | null;
    her2_status: string | null;
    tumor_histologic_subtype: string | null;
    hormone_therapy: string | null;
    menopausal_state: string | null;
    integrative_cluster: string | null;
    tumor_laterality: string | null;
    lymph_nodes_examined_positive: number | null;
    mutation_count: number | null;
    nottingham_prognostic_index: number | null;
    oncotree_code: string | null;
    overall_survival_months: number | null;
    overall_survival_status: string | null;
    pr_status: string | null;
    radio_therapy: string | null;
    relapse_free_status_months: number | null;
    sex: string | null;
    gene_classifier_subtype: string | null;
    tumor_size: number | null;
    tumor_stage: number | null;
    patient_vital_status: string | null;
    createdAt: Date | null;
};
export type DiagnosisCountAggregateOutputType = {
    id: number;
    diagnosis_code: number;
    patientId: number;
    doctorId: number;
    age_at_diagnosis: number;
    type_of_breast_surgery: number;
    cancer_type: number;
    cancer_type_detailed: number;
    cellularity: number;
    chemotherapy: number;
    pam50_subtype: number;
    cohort: number;
    er_status_ihc: number;
    er_status: number;
    neoplasm_histologic_grade: number;
    her2_status_snp6: number;
    her2_status: number;
    tumor_histologic_subtype: number;
    hormone_therapy: number;
    menopausal_state: number;
    integrative_cluster: number;
    tumor_laterality: number;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: number;
    overall_survival_months: number;
    overall_survival_status: number;
    pr_status: number;
    radio_therapy: number;
    relapse_free_status_months: number;
    sex: number;
    gene_classifier_subtype: number;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status: number;
    createdAt: number;
    _all: number;
};
export type DiagnosisAvgAggregateInputType = {
    age_at_diagnosis?: true;
    cohort?: true;
    neoplasm_histologic_grade?: true;
    lymph_nodes_examined_positive?: true;
    mutation_count?: true;
    nottingham_prognostic_index?: true;
    overall_survival_months?: true;
    relapse_free_status_months?: true;
    tumor_size?: true;
    tumor_stage?: true;
};
export type DiagnosisSumAggregateInputType = {
    age_at_diagnosis?: true;
    cohort?: true;
    neoplasm_histologic_grade?: true;
    lymph_nodes_examined_positive?: true;
    mutation_count?: true;
    nottingham_prognostic_index?: true;
    overall_survival_months?: true;
    relapse_free_status_months?: true;
    tumor_size?: true;
    tumor_stage?: true;
};
export type DiagnosisMinAggregateInputType = {
    id?: true;
    diagnosis_code?: true;
    patientId?: true;
    doctorId?: true;
    age_at_diagnosis?: true;
    type_of_breast_surgery?: true;
    cancer_type?: true;
    cancer_type_detailed?: true;
    cellularity?: true;
    chemotherapy?: true;
    pam50_subtype?: true;
    cohort?: true;
    er_status_ihc?: true;
    er_status?: true;
    neoplasm_histologic_grade?: true;
    her2_status_snp6?: true;
    her2_status?: true;
    tumor_histologic_subtype?: true;
    hormone_therapy?: true;
    menopausal_state?: true;
    integrative_cluster?: true;
    tumor_laterality?: true;
    lymph_nodes_examined_positive?: true;
    mutation_count?: true;
    nottingham_prognostic_index?: true;
    oncotree_code?: true;
    overall_survival_months?: true;
    overall_survival_status?: true;
    pr_status?: true;
    radio_therapy?: true;
    relapse_free_status_months?: true;
    sex?: true;
    gene_classifier_subtype?: true;
    tumor_size?: true;
    tumor_stage?: true;
    patient_vital_status?: true;
    createdAt?: true;
};
export type DiagnosisMaxAggregateInputType = {
    id?: true;
    diagnosis_code?: true;
    patientId?: true;
    doctorId?: true;
    age_at_diagnosis?: true;
    type_of_breast_surgery?: true;
    cancer_type?: true;
    cancer_type_detailed?: true;
    cellularity?: true;
    chemotherapy?: true;
    pam50_subtype?: true;
    cohort?: true;
    er_status_ihc?: true;
    er_status?: true;
    neoplasm_histologic_grade?: true;
    her2_status_snp6?: true;
    her2_status?: true;
    tumor_histologic_subtype?: true;
    hormone_therapy?: true;
    menopausal_state?: true;
    integrative_cluster?: true;
    tumor_laterality?: true;
    lymph_nodes_examined_positive?: true;
    mutation_count?: true;
    nottingham_prognostic_index?: true;
    oncotree_code?: true;
    overall_survival_months?: true;
    overall_survival_status?: true;
    pr_status?: true;
    radio_therapy?: true;
    relapse_free_status_months?: true;
    sex?: true;
    gene_classifier_subtype?: true;
    tumor_size?: true;
    tumor_stage?: true;
    patient_vital_status?: true;
    createdAt?: true;
};
export type DiagnosisCountAggregateInputType = {
    id?: true;
    diagnosis_code?: true;
    patientId?: true;
    doctorId?: true;
    age_at_diagnosis?: true;
    type_of_breast_surgery?: true;
    cancer_type?: true;
    cancer_type_detailed?: true;
    cellularity?: true;
    chemotherapy?: true;
    pam50_subtype?: true;
    cohort?: true;
    er_status_ihc?: true;
    er_status?: true;
    neoplasm_histologic_grade?: true;
    her2_status_snp6?: true;
    her2_status?: true;
    tumor_histologic_subtype?: true;
    hormone_therapy?: true;
    menopausal_state?: true;
    integrative_cluster?: true;
    tumor_laterality?: true;
    lymph_nodes_examined_positive?: true;
    mutation_count?: true;
    nottingham_prognostic_index?: true;
    oncotree_code?: true;
    overall_survival_months?: true;
    overall_survival_status?: true;
    pr_status?: true;
    radio_therapy?: true;
    relapse_free_status_months?: true;
    sex?: true;
    gene_classifier_subtype?: true;
    tumor_size?: true;
    tumor_stage?: true;
    patient_vital_status?: true;
    createdAt?: true;
    _all?: true;
};
export type DiagnosisAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnosis to aggregate.
     */
    where?: Prisma.DiagnosisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: Prisma.DiagnosisOrderByWithRelationInput | Prisma.DiagnosisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DiagnosisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Diagnoses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Diagnoses
    **/
    _count?: true | DiagnosisCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DiagnosisAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DiagnosisSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosisMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosisMaxAggregateInputType;
};
export type GetDiagnosisAggregateType<T extends DiagnosisAggregateArgs> = {
    [P in keyof T & keyof AggregateDiagnosis]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDiagnosis[P]> : Prisma.GetScalarType<T[P], AggregateDiagnosis[P]>;
};
export type DiagnosisGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DiagnosisWhereInput;
    orderBy?: Prisma.DiagnosisOrderByWithAggregationInput | Prisma.DiagnosisOrderByWithAggregationInput[];
    by: Prisma.DiagnosisScalarFieldEnum[] | Prisma.DiagnosisScalarFieldEnum;
    having?: Prisma.DiagnosisScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DiagnosisCountAggregateInputType | true;
    _avg?: DiagnosisAvgAggregateInputType;
    _sum?: DiagnosisSumAggregateInputType;
    _min?: DiagnosisMinAggregateInputType;
    _max?: DiagnosisMaxAggregateInputType;
};
export type DiagnosisGroupByOutputType = {
    id: string;
    diagnosis_code: string;
    patientId: string | null;
    doctorId: string;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status: string | null;
    createdAt: Date;
    _count: DiagnosisCountAggregateOutputType | null;
    _avg: DiagnosisAvgAggregateOutputType | null;
    _sum: DiagnosisSumAggregateOutputType | null;
    _min: DiagnosisMinAggregateOutputType | null;
    _max: DiagnosisMaxAggregateOutputType | null;
};
type GetDiagnosisGroupByPayload<T extends DiagnosisGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DiagnosisGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DiagnosisGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DiagnosisGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DiagnosisGroupByOutputType[P]>;
}>>;
export type DiagnosisWhereInput = {
    AND?: Prisma.DiagnosisWhereInput | Prisma.DiagnosisWhereInput[];
    OR?: Prisma.DiagnosisWhereInput[];
    NOT?: Prisma.DiagnosisWhereInput | Prisma.DiagnosisWhereInput[];
    id?: Prisma.StringFilter<"Diagnosis"> | string;
    diagnosis_code?: Prisma.StringFilter<"Diagnosis"> | string;
    patientId?: Prisma.StringNullableFilter<"Diagnosis"> | string | null;
    doctorId?: Prisma.StringFilter<"Diagnosis"> | string;
    age_at_diagnosis?: Prisma.FloatFilter<"Diagnosis"> | number;
    type_of_breast_surgery?: Prisma.StringFilter<"Diagnosis"> | string;
    cancer_type?: Prisma.StringFilter<"Diagnosis"> | string;
    cancer_type_detailed?: Prisma.StringFilter<"Diagnosis"> | string;
    cellularity?: Prisma.StringFilter<"Diagnosis"> | string;
    chemotherapy?: Prisma.StringFilter<"Diagnosis"> | string;
    pam50_subtype?: Prisma.StringFilter<"Diagnosis"> | string;
    cohort?: Prisma.FloatFilter<"Diagnosis"> | number;
    er_status_ihc?: Prisma.StringFilter<"Diagnosis"> | string;
    er_status?: Prisma.StringFilter<"Diagnosis"> | string;
    neoplasm_histologic_grade?: Prisma.FloatFilter<"Diagnosis"> | number;
    her2_status_snp6?: Prisma.StringFilter<"Diagnosis"> | string;
    her2_status?: Prisma.StringFilter<"Diagnosis"> | string;
    tumor_histologic_subtype?: Prisma.StringFilter<"Diagnosis"> | string;
    hormone_therapy?: Prisma.StringFilter<"Diagnosis"> | string;
    menopausal_state?: Prisma.StringFilter<"Diagnosis"> | string;
    integrative_cluster?: Prisma.StringFilter<"Diagnosis"> | string;
    tumor_laterality?: Prisma.StringFilter<"Diagnosis"> | string;
    lymph_nodes_examined_positive?: Prisma.FloatFilter<"Diagnosis"> | number;
    mutation_count?: Prisma.FloatFilter<"Diagnosis"> | number;
    nottingham_prognostic_index?: Prisma.FloatFilter<"Diagnosis"> | number;
    oncotree_code?: Prisma.StringFilter<"Diagnosis"> | string;
    overall_survival_months?: Prisma.FloatFilter<"Diagnosis"> | number;
    overall_survival_status?: Prisma.StringFilter<"Diagnosis"> | string;
    pr_status?: Prisma.StringFilter<"Diagnosis"> | string;
    radio_therapy?: Prisma.StringFilter<"Diagnosis"> | string;
    relapse_free_status_months?: Prisma.FloatFilter<"Diagnosis"> | number;
    sex?: Prisma.StringFilter<"Diagnosis"> | string;
    gene_classifier_subtype?: Prisma.StringFilter<"Diagnosis"> | string;
    tumor_size?: Prisma.FloatFilter<"Diagnosis"> | number;
    tumor_stage?: Prisma.FloatFilter<"Diagnosis"> | number;
    patient_vital_status?: Prisma.StringNullableFilter<"Diagnosis"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Diagnosis"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
};
export type DiagnosisOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    diagnosis_code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    age_at_diagnosis?: Prisma.SortOrder;
    type_of_breast_surgery?: Prisma.SortOrder;
    cancer_type?: Prisma.SortOrder;
    cancer_type_detailed?: Prisma.SortOrder;
    cellularity?: Prisma.SortOrder;
    chemotherapy?: Prisma.SortOrder;
    pam50_subtype?: Prisma.SortOrder;
    cohort?: Prisma.SortOrder;
    er_status_ihc?: Prisma.SortOrder;
    er_status?: Prisma.SortOrder;
    neoplasm_histologic_grade?: Prisma.SortOrder;
    her2_status_snp6?: Prisma.SortOrder;
    her2_status?: Prisma.SortOrder;
    tumor_histologic_subtype?: Prisma.SortOrder;
    hormone_therapy?: Prisma.SortOrder;
    menopausal_state?: Prisma.SortOrder;
    integrative_cluster?: Prisma.SortOrder;
    tumor_laterality?: Prisma.SortOrder;
    lymph_nodes_examined_positive?: Prisma.SortOrder;
    mutation_count?: Prisma.SortOrder;
    nottingham_prognostic_index?: Prisma.SortOrder;
    oncotree_code?: Prisma.SortOrder;
    overall_survival_months?: Prisma.SortOrder;
    overall_survival_status?: Prisma.SortOrder;
    pr_status?: Prisma.SortOrder;
    radio_therapy?: Prisma.SortOrder;
    relapse_free_status_months?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    gene_classifier_subtype?: Prisma.SortOrder;
    tumor_size?: Prisma.SortOrder;
    tumor_stage?: Prisma.SortOrder;
    patient_vital_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    patient?: Prisma.PatientOrderByWithRelationInput;
    doctor?: Prisma.DoctorOrderByWithRelationInput;
};
export type DiagnosisWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DiagnosisWhereInput | Prisma.DiagnosisWhereInput[];
    OR?: Prisma.DiagnosisWhereInput[];
    NOT?: Prisma.DiagnosisWhereInput | Prisma.DiagnosisWhereInput[];
    diagnosis_code?: Prisma.StringFilter<"Diagnosis"> | string;
    patientId?: Prisma.StringNullableFilter<"Diagnosis"> | string | null;
    doctorId?: Prisma.StringFilter<"Diagnosis"> | string;
    age_at_diagnosis?: Prisma.FloatFilter<"Diagnosis"> | number;
    type_of_breast_surgery?: Prisma.StringFilter<"Diagnosis"> | string;
    cancer_type?: Prisma.StringFilter<"Diagnosis"> | string;
    cancer_type_detailed?: Prisma.StringFilter<"Diagnosis"> | string;
    cellularity?: Prisma.StringFilter<"Diagnosis"> | string;
    chemotherapy?: Prisma.StringFilter<"Diagnosis"> | string;
    pam50_subtype?: Prisma.StringFilter<"Diagnosis"> | string;
    cohort?: Prisma.FloatFilter<"Diagnosis"> | number;
    er_status_ihc?: Prisma.StringFilter<"Diagnosis"> | string;
    er_status?: Prisma.StringFilter<"Diagnosis"> | string;
    neoplasm_histologic_grade?: Prisma.FloatFilter<"Diagnosis"> | number;
    her2_status_snp6?: Prisma.StringFilter<"Diagnosis"> | string;
    her2_status?: Prisma.StringFilter<"Diagnosis"> | string;
    tumor_histologic_subtype?: Prisma.StringFilter<"Diagnosis"> | string;
    hormone_therapy?: Prisma.StringFilter<"Diagnosis"> | string;
    menopausal_state?: Prisma.StringFilter<"Diagnosis"> | string;
    integrative_cluster?: Prisma.StringFilter<"Diagnosis"> | string;
    tumor_laterality?: Prisma.StringFilter<"Diagnosis"> | string;
    lymph_nodes_examined_positive?: Prisma.FloatFilter<"Diagnosis"> | number;
    mutation_count?: Prisma.FloatFilter<"Diagnosis"> | number;
    nottingham_prognostic_index?: Prisma.FloatFilter<"Diagnosis"> | number;
    oncotree_code?: Prisma.StringFilter<"Diagnosis"> | string;
    overall_survival_months?: Prisma.FloatFilter<"Diagnosis"> | number;
    overall_survival_status?: Prisma.StringFilter<"Diagnosis"> | string;
    pr_status?: Prisma.StringFilter<"Diagnosis"> | string;
    radio_therapy?: Prisma.StringFilter<"Diagnosis"> | string;
    relapse_free_status_months?: Prisma.FloatFilter<"Diagnosis"> | number;
    sex?: Prisma.StringFilter<"Diagnosis"> | string;
    gene_classifier_subtype?: Prisma.StringFilter<"Diagnosis"> | string;
    tumor_size?: Prisma.FloatFilter<"Diagnosis"> | number;
    tumor_stage?: Prisma.FloatFilter<"Diagnosis"> | number;
    patient_vital_status?: Prisma.StringNullableFilter<"Diagnosis"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Diagnosis"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
}, "id">;
export type DiagnosisOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    diagnosis_code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    age_at_diagnosis?: Prisma.SortOrder;
    type_of_breast_surgery?: Prisma.SortOrder;
    cancer_type?: Prisma.SortOrder;
    cancer_type_detailed?: Prisma.SortOrder;
    cellularity?: Prisma.SortOrder;
    chemotherapy?: Prisma.SortOrder;
    pam50_subtype?: Prisma.SortOrder;
    cohort?: Prisma.SortOrder;
    er_status_ihc?: Prisma.SortOrder;
    er_status?: Prisma.SortOrder;
    neoplasm_histologic_grade?: Prisma.SortOrder;
    her2_status_snp6?: Prisma.SortOrder;
    her2_status?: Prisma.SortOrder;
    tumor_histologic_subtype?: Prisma.SortOrder;
    hormone_therapy?: Prisma.SortOrder;
    menopausal_state?: Prisma.SortOrder;
    integrative_cluster?: Prisma.SortOrder;
    tumor_laterality?: Prisma.SortOrder;
    lymph_nodes_examined_positive?: Prisma.SortOrder;
    mutation_count?: Prisma.SortOrder;
    nottingham_prognostic_index?: Prisma.SortOrder;
    oncotree_code?: Prisma.SortOrder;
    overall_survival_months?: Prisma.SortOrder;
    overall_survival_status?: Prisma.SortOrder;
    pr_status?: Prisma.SortOrder;
    radio_therapy?: Prisma.SortOrder;
    relapse_free_status_months?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    gene_classifier_subtype?: Prisma.SortOrder;
    tumor_size?: Prisma.SortOrder;
    tumor_stage?: Prisma.SortOrder;
    patient_vital_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DiagnosisCountOrderByAggregateInput;
    _avg?: Prisma.DiagnosisAvgOrderByAggregateInput;
    _max?: Prisma.DiagnosisMaxOrderByAggregateInput;
    _min?: Prisma.DiagnosisMinOrderByAggregateInput;
    _sum?: Prisma.DiagnosisSumOrderByAggregateInput;
};
export type DiagnosisScalarWhereWithAggregatesInput = {
    AND?: Prisma.DiagnosisScalarWhereWithAggregatesInput | Prisma.DiagnosisScalarWhereWithAggregatesInput[];
    OR?: Prisma.DiagnosisScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DiagnosisScalarWhereWithAggregatesInput | Prisma.DiagnosisScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    diagnosis_code?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    patientId?: Prisma.StringNullableWithAggregatesFilter<"Diagnosis"> | string | null;
    doctorId?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    age_at_diagnosis?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    type_of_breast_surgery?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    cancer_type?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    cancer_type_detailed?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    cellularity?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    chemotherapy?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    pam50_subtype?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    cohort?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    er_status_ihc?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    er_status?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    neoplasm_histologic_grade?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    her2_status_snp6?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    her2_status?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    tumor_histologic_subtype?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    hormone_therapy?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    menopausal_state?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    integrative_cluster?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    tumor_laterality?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    lymph_nodes_examined_positive?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    mutation_count?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    nottingham_prognostic_index?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    oncotree_code?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    overall_survival_months?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    overall_survival_status?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    pr_status?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    radio_therapy?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    relapse_free_status_months?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    sex?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    gene_classifier_subtype?: Prisma.StringWithAggregatesFilter<"Diagnosis"> | string;
    tumor_size?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    tumor_stage?: Prisma.FloatWithAggregatesFilter<"Diagnosis"> | number;
    patient_vital_status?: Prisma.StringNullableWithAggregatesFilter<"Diagnosis"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Diagnosis"> | Date | string;
};
export type DiagnosisCreateInput = {
    id?: string;
    diagnosis_code: string;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type?: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex?: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status?: string | null;
    createdAt?: Date | string;
    patient?: Prisma.PatientCreateNestedOneWithoutDiagnosesInput;
    doctor: Prisma.DoctorCreateNestedOneWithoutDiagnosesInput;
};
export type DiagnosisUncheckedCreateInput = {
    id?: string;
    diagnosis_code: string;
    patientId?: string | null;
    doctorId: string;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type?: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex?: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status?: string | null;
    createdAt?: Date | string;
};
export type DiagnosisUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneWithoutDiagnosesNestedInput;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutDiagnosesNestedInput;
};
export type DiagnosisUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DiagnosisCreateManyInput = {
    id?: string;
    diagnosis_code: string;
    patientId?: string | null;
    doctorId: string;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type?: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex?: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status?: string | null;
    createdAt?: Date | string;
};
export type DiagnosisUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DiagnosisUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DiagnosisListRelationFilter = {
    every?: Prisma.DiagnosisWhereInput;
    some?: Prisma.DiagnosisWhereInput;
    none?: Prisma.DiagnosisWhereInput;
};
export type DiagnosisOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DiagnosisCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    diagnosis_code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    age_at_diagnosis?: Prisma.SortOrder;
    type_of_breast_surgery?: Prisma.SortOrder;
    cancer_type?: Prisma.SortOrder;
    cancer_type_detailed?: Prisma.SortOrder;
    cellularity?: Prisma.SortOrder;
    chemotherapy?: Prisma.SortOrder;
    pam50_subtype?: Prisma.SortOrder;
    cohort?: Prisma.SortOrder;
    er_status_ihc?: Prisma.SortOrder;
    er_status?: Prisma.SortOrder;
    neoplasm_histologic_grade?: Prisma.SortOrder;
    her2_status_snp6?: Prisma.SortOrder;
    her2_status?: Prisma.SortOrder;
    tumor_histologic_subtype?: Prisma.SortOrder;
    hormone_therapy?: Prisma.SortOrder;
    menopausal_state?: Prisma.SortOrder;
    integrative_cluster?: Prisma.SortOrder;
    tumor_laterality?: Prisma.SortOrder;
    lymph_nodes_examined_positive?: Prisma.SortOrder;
    mutation_count?: Prisma.SortOrder;
    nottingham_prognostic_index?: Prisma.SortOrder;
    oncotree_code?: Prisma.SortOrder;
    overall_survival_months?: Prisma.SortOrder;
    overall_survival_status?: Prisma.SortOrder;
    pr_status?: Prisma.SortOrder;
    radio_therapy?: Prisma.SortOrder;
    relapse_free_status_months?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    gene_classifier_subtype?: Prisma.SortOrder;
    tumor_size?: Prisma.SortOrder;
    tumor_stage?: Prisma.SortOrder;
    patient_vital_status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DiagnosisAvgOrderByAggregateInput = {
    age_at_diagnosis?: Prisma.SortOrder;
    cohort?: Prisma.SortOrder;
    neoplasm_histologic_grade?: Prisma.SortOrder;
    lymph_nodes_examined_positive?: Prisma.SortOrder;
    mutation_count?: Prisma.SortOrder;
    nottingham_prognostic_index?: Prisma.SortOrder;
    overall_survival_months?: Prisma.SortOrder;
    relapse_free_status_months?: Prisma.SortOrder;
    tumor_size?: Prisma.SortOrder;
    tumor_stage?: Prisma.SortOrder;
};
export type DiagnosisMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    diagnosis_code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    age_at_diagnosis?: Prisma.SortOrder;
    type_of_breast_surgery?: Prisma.SortOrder;
    cancer_type?: Prisma.SortOrder;
    cancer_type_detailed?: Prisma.SortOrder;
    cellularity?: Prisma.SortOrder;
    chemotherapy?: Prisma.SortOrder;
    pam50_subtype?: Prisma.SortOrder;
    cohort?: Prisma.SortOrder;
    er_status_ihc?: Prisma.SortOrder;
    er_status?: Prisma.SortOrder;
    neoplasm_histologic_grade?: Prisma.SortOrder;
    her2_status_snp6?: Prisma.SortOrder;
    her2_status?: Prisma.SortOrder;
    tumor_histologic_subtype?: Prisma.SortOrder;
    hormone_therapy?: Prisma.SortOrder;
    menopausal_state?: Prisma.SortOrder;
    integrative_cluster?: Prisma.SortOrder;
    tumor_laterality?: Prisma.SortOrder;
    lymph_nodes_examined_positive?: Prisma.SortOrder;
    mutation_count?: Prisma.SortOrder;
    nottingham_prognostic_index?: Prisma.SortOrder;
    oncotree_code?: Prisma.SortOrder;
    overall_survival_months?: Prisma.SortOrder;
    overall_survival_status?: Prisma.SortOrder;
    pr_status?: Prisma.SortOrder;
    radio_therapy?: Prisma.SortOrder;
    relapse_free_status_months?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    gene_classifier_subtype?: Prisma.SortOrder;
    tumor_size?: Prisma.SortOrder;
    tumor_stage?: Prisma.SortOrder;
    patient_vital_status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DiagnosisMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    diagnosis_code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    age_at_diagnosis?: Prisma.SortOrder;
    type_of_breast_surgery?: Prisma.SortOrder;
    cancer_type?: Prisma.SortOrder;
    cancer_type_detailed?: Prisma.SortOrder;
    cellularity?: Prisma.SortOrder;
    chemotherapy?: Prisma.SortOrder;
    pam50_subtype?: Prisma.SortOrder;
    cohort?: Prisma.SortOrder;
    er_status_ihc?: Prisma.SortOrder;
    er_status?: Prisma.SortOrder;
    neoplasm_histologic_grade?: Prisma.SortOrder;
    her2_status_snp6?: Prisma.SortOrder;
    her2_status?: Prisma.SortOrder;
    tumor_histologic_subtype?: Prisma.SortOrder;
    hormone_therapy?: Prisma.SortOrder;
    menopausal_state?: Prisma.SortOrder;
    integrative_cluster?: Prisma.SortOrder;
    tumor_laterality?: Prisma.SortOrder;
    lymph_nodes_examined_positive?: Prisma.SortOrder;
    mutation_count?: Prisma.SortOrder;
    nottingham_prognostic_index?: Prisma.SortOrder;
    oncotree_code?: Prisma.SortOrder;
    overall_survival_months?: Prisma.SortOrder;
    overall_survival_status?: Prisma.SortOrder;
    pr_status?: Prisma.SortOrder;
    radio_therapy?: Prisma.SortOrder;
    relapse_free_status_months?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    gene_classifier_subtype?: Prisma.SortOrder;
    tumor_size?: Prisma.SortOrder;
    tumor_stage?: Prisma.SortOrder;
    patient_vital_status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DiagnosisSumOrderByAggregateInput = {
    age_at_diagnosis?: Prisma.SortOrder;
    cohort?: Prisma.SortOrder;
    neoplasm_histologic_grade?: Prisma.SortOrder;
    lymph_nodes_examined_positive?: Prisma.SortOrder;
    mutation_count?: Prisma.SortOrder;
    nottingham_prognostic_index?: Prisma.SortOrder;
    overall_survival_months?: Prisma.SortOrder;
    relapse_free_status_months?: Prisma.SortOrder;
    tumor_size?: Prisma.SortOrder;
    tumor_stage?: Prisma.SortOrder;
};
export type DiagnosisCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DiagnosisCreateWithoutDoctorInput, Prisma.DiagnosisUncheckedCreateWithoutDoctorInput> | Prisma.DiagnosisCreateWithoutDoctorInput[] | Prisma.DiagnosisUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DiagnosisCreateOrConnectWithoutDoctorInput | Prisma.DiagnosisCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DiagnosisCreateManyDoctorInputEnvelope;
    connect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
};
export type DiagnosisUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DiagnosisCreateWithoutDoctorInput, Prisma.DiagnosisUncheckedCreateWithoutDoctorInput> | Prisma.DiagnosisCreateWithoutDoctorInput[] | Prisma.DiagnosisUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DiagnosisCreateOrConnectWithoutDoctorInput | Prisma.DiagnosisCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DiagnosisCreateManyDoctorInputEnvelope;
    connect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
};
export type DiagnosisUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DiagnosisCreateWithoutDoctorInput, Prisma.DiagnosisUncheckedCreateWithoutDoctorInput> | Prisma.DiagnosisCreateWithoutDoctorInput[] | Prisma.DiagnosisUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DiagnosisCreateOrConnectWithoutDoctorInput | Prisma.DiagnosisCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DiagnosisUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DiagnosisUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DiagnosisCreateManyDoctorInputEnvelope;
    set?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    disconnect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    delete?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    connect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    update?: Prisma.DiagnosisUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DiagnosisUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DiagnosisUpdateManyWithWhereWithoutDoctorInput | Prisma.DiagnosisUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DiagnosisScalarWhereInput | Prisma.DiagnosisScalarWhereInput[];
};
export type DiagnosisUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DiagnosisCreateWithoutDoctorInput, Prisma.DiagnosisUncheckedCreateWithoutDoctorInput> | Prisma.DiagnosisCreateWithoutDoctorInput[] | Prisma.DiagnosisUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DiagnosisCreateOrConnectWithoutDoctorInput | Prisma.DiagnosisCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DiagnosisUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DiagnosisUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DiagnosisCreateManyDoctorInputEnvelope;
    set?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    disconnect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    delete?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    connect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    update?: Prisma.DiagnosisUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DiagnosisUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DiagnosisUpdateManyWithWhereWithoutDoctorInput | Prisma.DiagnosisUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DiagnosisScalarWhereInput | Prisma.DiagnosisScalarWhereInput[];
};
export type DiagnosisCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.DiagnosisCreateWithoutPatientInput, Prisma.DiagnosisUncheckedCreateWithoutPatientInput> | Prisma.DiagnosisCreateWithoutPatientInput[] | Prisma.DiagnosisUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.DiagnosisCreateOrConnectWithoutPatientInput | Prisma.DiagnosisCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.DiagnosisCreateManyPatientInputEnvelope;
    connect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
};
export type DiagnosisUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.DiagnosisCreateWithoutPatientInput, Prisma.DiagnosisUncheckedCreateWithoutPatientInput> | Prisma.DiagnosisCreateWithoutPatientInput[] | Prisma.DiagnosisUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.DiagnosisCreateOrConnectWithoutPatientInput | Prisma.DiagnosisCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.DiagnosisCreateManyPatientInputEnvelope;
    connect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
};
export type DiagnosisUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.DiagnosisCreateWithoutPatientInput, Prisma.DiagnosisUncheckedCreateWithoutPatientInput> | Prisma.DiagnosisCreateWithoutPatientInput[] | Prisma.DiagnosisUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.DiagnosisCreateOrConnectWithoutPatientInput | Prisma.DiagnosisCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.DiagnosisUpsertWithWhereUniqueWithoutPatientInput | Prisma.DiagnosisUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.DiagnosisCreateManyPatientInputEnvelope;
    set?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    disconnect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    delete?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    connect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    update?: Prisma.DiagnosisUpdateWithWhereUniqueWithoutPatientInput | Prisma.DiagnosisUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.DiagnosisUpdateManyWithWhereWithoutPatientInput | Prisma.DiagnosisUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.DiagnosisScalarWhereInput | Prisma.DiagnosisScalarWhereInput[];
};
export type DiagnosisUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.DiagnosisCreateWithoutPatientInput, Prisma.DiagnosisUncheckedCreateWithoutPatientInput> | Prisma.DiagnosisCreateWithoutPatientInput[] | Prisma.DiagnosisUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.DiagnosisCreateOrConnectWithoutPatientInput | Prisma.DiagnosisCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.DiagnosisUpsertWithWhereUniqueWithoutPatientInput | Prisma.DiagnosisUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.DiagnosisCreateManyPatientInputEnvelope;
    set?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    disconnect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    delete?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    connect?: Prisma.DiagnosisWhereUniqueInput | Prisma.DiagnosisWhereUniqueInput[];
    update?: Prisma.DiagnosisUpdateWithWhereUniqueWithoutPatientInput | Prisma.DiagnosisUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.DiagnosisUpdateManyWithWhereWithoutPatientInput | Prisma.DiagnosisUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.DiagnosisScalarWhereInput | Prisma.DiagnosisScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DiagnosisCreateWithoutDoctorInput = {
    id?: string;
    diagnosis_code: string;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type?: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex?: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status?: string | null;
    createdAt?: Date | string;
    patient?: Prisma.PatientCreateNestedOneWithoutDiagnosesInput;
};
export type DiagnosisUncheckedCreateWithoutDoctorInput = {
    id?: string;
    diagnosis_code: string;
    patientId?: string | null;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type?: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex?: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status?: string | null;
    createdAt?: Date | string;
};
export type DiagnosisCreateOrConnectWithoutDoctorInput = {
    where: Prisma.DiagnosisWhereUniqueInput;
    create: Prisma.XOR<Prisma.DiagnosisCreateWithoutDoctorInput, Prisma.DiagnosisUncheckedCreateWithoutDoctorInput>;
};
export type DiagnosisCreateManyDoctorInputEnvelope = {
    data: Prisma.DiagnosisCreateManyDoctorInput | Prisma.DiagnosisCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type DiagnosisUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DiagnosisWhereUniqueInput;
    update: Prisma.XOR<Prisma.DiagnosisUpdateWithoutDoctorInput, Prisma.DiagnosisUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.DiagnosisCreateWithoutDoctorInput, Prisma.DiagnosisUncheckedCreateWithoutDoctorInput>;
};
export type DiagnosisUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DiagnosisWhereUniqueInput;
    data: Prisma.XOR<Prisma.DiagnosisUpdateWithoutDoctorInput, Prisma.DiagnosisUncheckedUpdateWithoutDoctorInput>;
};
export type DiagnosisUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.DiagnosisScalarWhereInput;
    data: Prisma.XOR<Prisma.DiagnosisUpdateManyMutationInput, Prisma.DiagnosisUncheckedUpdateManyWithoutDoctorInput>;
};
export type DiagnosisScalarWhereInput = {
    AND?: Prisma.DiagnosisScalarWhereInput | Prisma.DiagnosisScalarWhereInput[];
    OR?: Prisma.DiagnosisScalarWhereInput[];
    NOT?: Prisma.DiagnosisScalarWhereInput | Prisma.DiagnosisScalarWhereInput[];
    id?: Prisma.StringFilter<"Diagnosis"> | string;
    diagnosis_code?: Prisma.StringFilter<"Diagnosis"> | string;
    patientId?: Prisma.StringNullableFilter<"Diagnosis"> | string | null;
    doctorId?: Prisma.StringFilter<"Diagnosis"> | string;
    age_at_diagnosis?: Prisma.FloatFilter<"Diagnosis"> | number;
    type_of_breast_surgery?: Prisma.StringFilter<"Diagnosis"> | string;
    cancer_type?: Prisma.StringFilter<"Diagnosis"> | string;
    cancer_type_detailed?: Prisma.StringFilter<"Diagnosis"> | string;
    cellularity?: Prisma.StringFilter<"Diagnosis"> | string;
    chemotherapy?: Prisma.StringFilter<"Diagnosis"> | string;
    pam50_subtype?: Prisma.StringFilter<"Diagnosis"> | string;
    cohort?: Prisma.FloatFilter<"Diagnosis"> | number;
    er_status_ihc?: Prisma.StringFilter<"Diagnosis"> | string;
    er_status?: Prisma.StringFilter<"Diagnosis"> | string;
    neoplasm_histologic_grade?: Prisma.FloatFilter<"Diagnosis"> | number;
    her2_status_snp6?: Prisma.StringFilter<"Diagnosis"> | string;
    her2_status?: Prisma.StringFilter<"Diagnosis"> | string;
    tumor_histologic_subtype?: Prisma.StringFilter<"Diagnosis"> | string;
    hormone_therapy?: Prisma.StringFilter<"Diagnosis"> | string;
    menopausal_state?: Prisma.StringFilter<"Diagnosis"> | string;
    integrative_cluster?: Prisma.StringFilter<"Diagnosis"> | string;
    tumor_laterality?: Prisma.StringFilter<"Diagnosis"> | string;
    lymph_nodes_examined_positive?: Prisma.FloatFilter<"Diagnosis"> | number;
    mutation_count?: Prisma.FloatFilter<"Diagnosis"> | number;
    nottingham_prognostic_index?: Prisma.FloatFilter<"Diagnosis"> | number;
    oncotree_code?: Prisma.StringFilter<"Diagnosis"> | string;
    overall_survival_months?: Prisma.FloatFilter<"Diagnosis"> | number;
    overall_survival_status?: Prisma.StringFilter<"Diagnosis"> | string;
    pr_status?: Prisma.StringFilter<"Diagnosis"> | string;
    radio_therapy?: Prisma.StringFilter<"Diagnosis"> | string;
    relapse_free_status_months?: Prisma.FloatFilter<"Diagnosis"> | number;
    sex?: Prisma.StringFilter<"Diagnosis"> | string;
    gene_classifier_subtype?: Prisma.StringFilter<"Diagnosis"> | string;
    tumor_size?: Prisma.FloatFilter<"Diagnosis"> | number;
    tumor_stage?: Prisma.FloatFilter<"Diagnosis"> | number;
    patient_vital_status?: Prisma.StringNullableFilter<"Diagnosis"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Diagnosis"> | Date | string;
};
export type DiagnosisCreateWithoutPatientInput = {
    id?: string;
    diagnosis_code: string;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type?: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex?: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status?: string | null;
    createdAt?: Date | string;
    doctor: Prisma.DoctorCreateNestedOneWithoutDiagnosesInput;
};
export type DiagnosisUncheckedCreateWithoutPatientInput = {
    id?: string;
    diagnosis_code: string;
    doctorId: string;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type?: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex?: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status?: string | null;
    createdAt?: Date | string;
};
export type DiagnosisCreateOrConnectWithoutPatientInput = {
    where: Prisma.DiagnosisWhereUniqueInput;
    create: Prisma.XOR<Prisma.DiagnosisCreateWithoutPatientInput, Prisma.DiagnosisUncheckedCreateWithoutPatientInput>;
};
export type DiagnosisCreateManyPatientInputEnvelope = {
    data: Prisma.DiagnosisCreateManyPatientInput | Prisma.DiagnosisCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type DiagnosisUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.DiagnosisWhereUniqueInput;
    update: Prisma.XOR<Prisma.DiagnosisUpdateWithoutPatientInput, Prisma.DiagnosisUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.DiagnosisCreateWithoutPatientInput, Prisma.DiagnosisUncheckedCreateWithoutPatientInput>;
};
export type DiagnosisUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.DiagnosisWhereUniqueInput;
    data: Prisma.XOR<Prisma.DiagnosisUpdateWithoutPatientInput, Prisma.DiagnosisUncheckedUpdateWithoutPatientInput>;
};
export type DiagnosisUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.DiagnosisScalarWhereInput;
    data: Prisma.XOR<Prisma.DiagnosisUpdateManyMutationInput, Prisma.DiagnosisUncheckedUpdateManyWithoutPatientInput>;
};
export type DiagnosisCreateManyDoctorInput = {
    id?: string;
    diagnosis_code: string;
    patientId?: string | null;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type?: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex?: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status?: string | null;
    createdAt?: Date | string;
};
export type DiagnosisUpdateWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneWithoutDiagnosesNestedInput;
};
export type DiagnosisUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DiagnosisUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DiagnosisCreateManyPatientInput = {
    id?: string;
    diagnosis_code: string;
    doctorId: string;
    age_at_diagnosis: number;
    type_of_breast_surgery: string;
    cancer_type?: string;
    cancer_type_detailed: string;
    cellularity: string;
    chemotherapy: string;
    pam50_subtype: string;
    cohort: number;
    er_status_ihc: string;
    er_status: string;
    neoplasm_histologic_grade: number;
    her2_status_snp6: string;
    her2_status: string;
    tumor_histologic_subtype: string;
    hormone_therapy: string;
    menopausal_state: string;
    integrative_cluster: string;
    tumor_laterality: string;
    lymph_nodes_examined_positive: number;
    mutation_count: number;
    nottingham_prognostic_index: number;
    oncotree_code: string;
    overall_survival_months: number;
    overall_survival_status: string;
    pr_status: string;
    radio_therapy: string;
    relapse_free_status_months: number;
    sex?: string;
    gene_classifier_subtype: string;
    tumor_size: number;
    tumor_stage: number;
    patient_vital_status?: string | null;
    createdAt?: Date | string;
};
export type DiagnosisUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutDiagnosesNestedInput;
};
export type DiagnosisUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DiagnosisUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis_code?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    age_at_diagnosis?: Prisma.FloatFieldUpdateOperationsInput | number;
    type_of_breast_surgery?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cancer_type_detailed?: Prisma.StringFieldUpdateOperationsInput | string;
    cellularity?: Prisma.StringFieldUpdateOperationsInput | string;
    chemotherapy?: Prisma.StringFieldUpdateOperationsInput | string;
    pam50_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    cohort?: Prisma.FloatFieldUpdateOperationsInput | number;
    er_status_ihc?: Prisma.StringFieldUpdateOperationsInput | string;
    er_status?: Prisma.StringFieldUpdateOperationsInput | string;
    neoplasm_histologic_grade?: Prisma.FloatFieldUpdateOperationsInput | number;
    her2_status_snp6?: Prisma.StringFieldUpdateOperationsInput | string;
    her2_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_histologic_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    hormone_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    menopausal_state?: Prisma.StringFieldUpdateOperationsInput | string;
    integrative_cluster?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_laterality?: Prisma.StringFieldUpdateOperationsInput | string;
    lymph_nodes_examined_positive?: Prisma.FloatFieldUpdateOperationsInput | number;
    mutation_count?: Prisma.FloatFieldUpdateOperationsInput | number;
    nottingham_prognostic_index?: Prisma.FloatFieldUpdateOperationsInput | number;
    oncotree_code?: Prisma.StringFieldUpdateOperationsInput | string;
    overall_survival_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    overall_survival_status?: Prisma.StringFieldUpdateOperationsInput | string;
    pr_status?: Prisma.StringFieldUpdateOperationsInput | string;
    radio_therapy?: Prisma.StringFieldUpdateOperationsInput | string;
    relapse_free_status_months?: Prisma.FloatFieldUpdateOperationsInput | number;
    sex?: Prisma.StringFieldUpdateOperationsInput | string;
    gene_classifier_subtype?: Prisma.StringFieldUpdateOperationsInput | string;
    tumor_size?: Prisma.FloatFieldUpdateOperationsInput | number;
    tumor_stage?: Prisma.FloatFieldUpdateOperationsInput | number;
    patient_vital_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DiagnosisSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    diagnosis_code?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    age_at_diagnosis?: boolean;
    type_of_breast_surgery?: boolean;
    cancer_type?: boolean;
    cancer_type_detailed?: boolean;
    cellularity?: boolean;
    chemotherapy?: boolean;
    pam50_subtype?: boolean;
    cohort?: boolean;
    er_status_ihc?: boolean;
    er_status?: boolean;
    neoplasm_histologic_grade?: boolean;
    her2_status_snp6?: boolean;
    her2_status?: boolean;
    tumor_histologic_subtype?: boolean;
    hormone_therapy?: boolean;
    menopausal_state?: boolean;
    integrative_cluster?: boolean;
    tumor_laterality?: boolean;
    lymph_nodes_examined_positive?: boolean;
    mutation_count?: boolean;
    nottingham_prognostic_index?: boolean;
    oncotree_code?: boolean;
    overall_survival_months?: boolean;
    overall_survival_status?: boolean;
    pr_status?: boolean;
    radio_therapy?: boolean;
    relapse_free_status_months?: boolean;
    sex?: boolean;
    gene_classifier_subtype?: boolean;
    tumor_size?: boolean;
    tumor_stage?: boolean;
    patient_vital_status?: boolean;
    createdAt?: boolean;
    patient?: boolean | Prisma.Diagnosis$patientArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["diagnosis"]>;
export type DiagnosisSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    diagnosis_code?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    age_at_diagnosis?: boolean;
    type_of_breast_surgery?: boolean;
    cancer_type?: boolean;
    cancer_type_detailed?: boolean;
    cellularity?: boolean;
    chemotherapy?: boolean;
    pam50_subtype?: boolean;
    cohort?: boolean;
    er_status_ihc?: boolean;
    er_status?: boolean;
    neoplasm_histologic_grade?: boolean;
    her2_status_snp6?: boolean;
    her2_status?: boolean;
    tumor_histologic_subtype?: boolean;
    hormone_therapy?: boolean;
    menopausal_state?: boolean;
    integrative_cluster?: boolean;
    tumor_laterality?: boolean;
    lymph_nodes_examined_positive?: boolean;
    mutation_count?: boolean;
    nottingham_prognostic_index?: boolean;
    oncotree_code?: boolean;
    overall_survival_months?: boolean;
    overall_survival_status?: boolean;
    pr_status?: boolean;
    radio_therapy?: boolean;
    relapse_free_status_months?: boolean;
    sex?: boolean;
    gene_classifier_subtype?: boolean;
    tumor_size?: boolean;
    tumor_stage?: boolean;
    patient_vital_status?: boolean;
    createdAt?: boolean;
    patient?: boolean | Prisma.Diagnosis$patientArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["diagnosis"]>;
export type DiagnosisSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    diagnosis_code?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    age_at_diagnosis?: boolean;
    type_of_breast_surgery?: boolean;
    cancer_type?: boolean;
    cancer_type_detailed?: boolean;
    cellularity?: boolean;
    chemotherapy?: boolean;
    pam50_subtype?: boolean;
    cohort?: boolean;
    er_status_ihc?: boolean;
    er_status?: boolean;
    neoplasm_histologic_grade?: boolean;
    her2_status_snp6?: boolean;
    her2_status?: boolean;
    tumor_histologic_subtype?: boolean;
    hormone_therapy?: boolean;
    menopausal_state?: boolean;
    integrative_cluster?: boolean;
    tumor_laterality?: boolean;
    lymph_nodes_examined_positive?: boolean;
    mutation_count?: boolean;
    nottingham_prognostic_index?: boolean;
    oncotree_code?: boolean;
    overall_survival_months?: boolean;
    overall_survival_status?: boolean;
    pr_status?: boolean;
    radio_therapy?: boolean;
    relapse_free_status_months?: boolean;
    sex?: boolean;
    gene_classifier_subtype?: boolean;
    tumor_size?: boolean;
    tumor_stage?: boolean;
    patient_vital_status?: boolean;
    createdAt?: boolean;
    patient?: boolean | Prisma.Diagnosis$patientArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["diagnosis"]>;
export type DiagnosisSelectScalar = {
    id?: boolean;
    diagnosis_code?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    age_at_diagnosis?: boolean;
    type_of_breast_surgery?: boolean;
    cancer_type?: boolean;
    cancer_type_detailed?: boolean;
    cellularity?: boolean;
    chemotherapy?: boolean;
    pam50_subtype?: boolean;
    cohort?: boolean;
    er_status_ihc?: boolean;
    er_status?: boolean;
    neoplasm_histologic_grade?: boolean;
    her2_status_snp6?: boolean;
    her2_status?: boolean;
    tumor_histologic_subtype?: boolean;
    hormone_therapy?: boolean;
    menopausal_state?: boolean;
    integrative_cluster?: boolean;
    tumor_laterality?: boolean;
    lymph_nodes_examined_positive?: boolean;
    mutation_count?: boolean;
    nottingham_prognostic_index?: boolean;
    oncotree_code?: boolean;
    overall_survival_months?: boolean;
    overall_survival_status?: boolean;
    pr_status?: boolean;
    radio_therapy?: boolean;
    relapse_free_status_months?: boolean;
    sex?: boolean;
    gene_classifier_subtype?: boolean;
    tumor_size?: boolean;
    tumor_stage?: boolean;
    patient_vital_status?: boolean;
    createdAt?: boolean;
};
export type DiagnosisOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "diagnosis_code" | "patientId" | "doctorId" | "age_at_diagnosis" | "type_of_breast_surgery" | "cancer_type" | "cancer_type_detailed" | "cellularity" | "chemotherapy" | "pam50_subtype" | "cohort" | "er_status_ihc" | "er_status" | "neoplasm_histologic_grade" | "her2_status_snp6" | "her2_status" | "tumor_histologic_subtype" | "hormone_therapy" | "menopausal_state" | "integrative_cluster" | "tumor_laterality" | "lymph_nodes_examined_positive" | "mutation_count" | "nottingham_prognostic_index" | "oncotree_code" | "overall_survival_months" | "overall_survival_status" | "pr_status" | "radio_therapy" | "relapse_free_status_months" | "sex" | "gene_classifier_subtype" | "tumor_size" | "tumor_stage" | "patient_vital_status" | "createdAt", ExtArgs["result"]["diagnosis"]>;
export type DiagnosisInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.Diagnosis$patientArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
};
export type DiagnosisIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.Diagnosis$patientArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
};
export type DiagnosisIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.Diagnosis$patientArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
};
export type $DiagnosisPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Diagnosis";
    objects: {
        patient: Prisma.$PatientPayload<ExtArgs> | null;
        doctor: Prisma.$DoctorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        diagnosis_code: string;
        patientId: string | null;
        doctorId: string;
        age_at_diagnosis: number;
        type_of_breast_surgery: string;
        cancer_type: string;
        cancer_type_detailed: string;
        cellularity: string;
        chemotherapy: string;
        pam50_subtype: string;
        cohort: number;
        er_status_ihc: string;
        er_status: string;
        neoplasm_histologic_grade: number;
        her2_status_snp6: string;
        her2_status: string;
        tumor_histologic_subtype: string;
        hormone_therapy: string;
        menopausal_state: string;
        integrative_cluster: string;
        tumor_laterality: string;
        lymph_nodes_examined_positive: number;
        mutation_count: number;
        nottingham_prognostic_index: number;
        oncotree_code: string;
        overall_survival_months: number;
        overall_survival_status: string;
        pr_status: string;
        radio_therapy: string;
        relapse_free_status_months: number;
        sex: string;
        gene_classifier_subtype: string;
        tumor_size: number;
        tumor_stage: number;
        patient_vital_status: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["diagnosis"]>;
    composites: {};
};
export type DiagnosisGetPayload<S extends boolean | null | undefined | DiagnosisDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload, S>;
export type DiagnosisCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DiagnosisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DiagnosisCountAggregateInputType | true;
};
export interface DiagnosisDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Diagnosis'];
        meta: {
            name: 'Diagnosis';
        };
    };
    /**
     * Find zero or one Diagnosis that matches the filter.
     * @param {DiagnosisFindUniqueArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosisFindUniqueArgs>(args: Prisma.SelectSubset<T, DiagnosisFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DiagnosisClient<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Diagnosis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosisFindUniqueOrThrowArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosisFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DiagnosisFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DiagnosisClient<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Diagnosis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindFirstArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosisFindFirstArgs>(args?: Prisma.SelectSubset<T, DiagnosisFindFirstArgs<ExtArgs>>): Prisma.Prisma__DiagnosisClient<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Diagnosis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindFirstOrThrowArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosisFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DiagnosisFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DiagnosisClient<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnoses
     * const diagnoses = await prisma.diagnosis.findMany()
     *
     * // Get first 10 Diagnoses
     * const diagnoses = await prisma.diagnosis.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DiagnosisFindManyArgs>(args?: Prisma.SelectSubset<T, DiagnosisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Diagnosis.
     * @param {DiagnosisCreateArgs} args - Arguments to create a Diagnosis.
     * @example
     * // Create one Diagnosis
     * const Diagnosis = await prisma.diagnosis.create({
     *   data: {
     *     // ... data to create a Diagnosis
     *   }
     * })
     *
     */
    create<T extends DiagnosisCreateArgs>(args: Prisma.SelectSubset<T, DiagnosisCreateArgs<ExtArgs>>): Prisma.Prisma__DiagnosisClient<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Diagnoses.
     * @param {DiagnosisCreateManyArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnosis = await prisma.diagnosis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DiagnosisCreateManyArgs>(args?: Prisma.SelectSubset<T, DiagnosisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Diagnoses and returns the data saved in the database.
     * @param {DiagnosisCreateManyAndReturnArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnosis = await prisma.diagnosis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Diagnoses and only return the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DiagnosisCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DiagnosisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Diagnosis.
     * @param {DiagnosisDeleteArgs} args - Arguments to delete one Diagnosis.
     * @example
     * // Delete one Diagnosis
     * const Diagnosis = await prisma.diagnosis.delete({
     *   where: {
     *     // ... filter to delete one Diagnosis
     *   }
     * })
     *
     */
    delete<T extends DiagnosisDeleteArgs>(args: Prisma.SelectSubset<T, DiagnosisDeleteArgs<ExtArgs>>): Prisma.Prisma__DiagnosisClient<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Diagnosis.
     * @param {DiagnosisUpdateArgs} args - Arguments to update one Diagnosis.
     * @example
     * // Update one Diagnosis
     * const diagnosis = await prisma.diagnosis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DiagnosisUpdateArgs>(args: Prisma.SelectSubset<T, DiagnosisUpdateArgs<ExtArgs>>): Prisma.Prisma__DiagnosisClient<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Diagnoses.
     * @param {DiagnosisDeleteManyArgs} args - Arguments to filter Diagnoses to delete.
     * @example
     * // Delete a few Diagnoses
     * const { count } = await prisma.diagnosis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DiagnosisDeleteManyArgs>(args?: Prisma.SelectSubset<T, DiagnosisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnoses
     * const diagnosis = await prisma.diagnosis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DiagnosisUpdateManyArgs>(args: Prisma.SelectSubset<T, DiagnosisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Diagnoses and returns the data updated in the database.
     * @param {DiagnosisUpdateManyAndReturnArgs} args - Arguments to update many Diagnoses.
     * @example
     * // Update many Diagnoses
     * const diagnosis = await prisma.diagnosis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Diagnoses and only return the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DiagnosisUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DiagnosisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Diagnosis.
     * @param {DiagnosisUpsertArgs} args - Arguments to update or create a Diagnosis.
     * @example
     * // Update or create a Diagnosis
     * const diagnosis = await prisma.diagnosis.upsert({
     *   create: {
     *     // ... data to create a Diagnosis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnosis we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosisUpsertArgs>(args: Prisma.SelectSubset<T, DiagnosisUpsertArgs<ExtArgs>>): Prisma.Prisma__DiagnosisClient<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCountArgs} args - Arguments to filter Diagnoses to count.
     * @example
     * // Count the number of Diagnoses
     * const count = await prisma.diagnosis.count({
     *   where: {
     *     // ... the filter for the Diagnoses we want to count
     *   }
     * })
    **/
    count<T extends DiagnosisCountArgs>(args?: Prisma.Subset<T, DiagnosisCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DiagnosisCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Diagnosis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiagnosisAggregateArgs>(args: Prisma.Subset<T, DiagnosisAggregateArgs>): Prisma.PrismaPromise<GetDiagnosisAggregateType<T>>;
    /**
     * Group by Diagnosis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends DiagnosisGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DiagnosisGroupByArgs['orderBy'];
    } : {
        orderBy?: DiagnosisGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DiagnosisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Diagnosis model
     */
    readonly fields: DiagnosisFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Diagnosis.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DiagnosisClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.Diagnosis$patientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Diagnosis$patientArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    doctor<T extends Prisma.DoctorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Diagnosis model
 */
export interface DiagnosisFieldRefs {
    readonly id: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly diagnosis_code: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly patientId: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly doctorId: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly age_at_diagnosis: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly type_of_breast_surgery: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly cancer_type: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly cancer_type_detailed: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly cellularity: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly chemotherapy: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly pam50_subtype: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly cohort: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly er_status_ihc: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly er_status: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly neoplasm_histologic_grade: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly her2_status_snp6: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly her2_status: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly tumor_histologic_subtype: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly hormone_therapy: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly menopausal_state: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly integrative_cluster: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly tumor_laterality: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly lymph_nodes_examined_positive: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly mutation_count: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly nottingham_prognostic_index: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly oncotree_code: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly overall_survival_months: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly overall_survival_status: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly pr_status: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly radio_therapy: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly relapse_free_status_months: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly sex: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly gene_classifier_subtype: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly tumor_size: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly tumor_stage: Prisma.FieldRef<"Diagnosis", 'Float'>;
    readonly patient_vital_status: Prisma.FieldRef<"Diagnosis", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Diagnosis", 'DateTime'>;
}
/**
 * Diagnosis findUnique
 */
export type DiagnosisFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    /**
     * Filter, which Diagnosis to fetch.
     */
    where: Prisma.DiagnosisWhereUniqueInput;
};
/**
 * Diagnosis findUniqueOrThrow
 */
export type DiagnosisFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    /**
     * Filter, which Diagnosis to fetch.
     */
    where: Prisma.DiagnosisWhereUniqueInput;
};
/**
 * Diagnosis findFirst
 */
export type DiagnosisFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    /**
     * Filter, which Diagnosis to fetch.
     */
    where?: Prisma.DiagnosisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: Prisma.DiagnosisOrderByWithRelationInput | Prisma.DiagnosisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Diagnoses.
     */
    cursor?: Prisma.DiagnosisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Diagnoses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: Prisma.DiagnosisScalarFieldEnum | Prisma.DiagnosisScalarFieldEnum[];
};
/**
 * Diagnosis findFirstOrThrow
 */
export type DiagnosisFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    /**
     * Filter, which Diagnosis to fetch.
     */
    where?: Prisma.DiagnosisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: Prisma.DiagnosisOrderByWithRelationInput | Prisma.DiagnosisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Diagnoses.
     */
    cursor?: Prisma.DiagnosisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Diagnoses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: Prisma.DiagnosisScalarFieldEnum | Prisma.DiagnosisScalarFieldEnum[];
};
/**
 * Diagnosis findMany
 */
export type DiagnosisFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: Prisma.DiagnosisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: Prisma.DiagnosisOrderByWithRelationInput | Prisma.DiagnosisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Diagnoses.
     */
    cursor?: Prisma.DiagnosisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Diagnoses.
     */
    skip?: number;
    distinct?: Prisma.DiagnosisScalarFieldEnum | Prisma.DiagnosisScalarFieldEnum[];
};
/**
 * Diagnosis create
 */
export type DiagnosisCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    /**
     * The data needed to create a Diagnosis.
     */
    data: Prisma.XOR<Prisma.DiagnosisCreateInput, Prisma.DiagnosisUncheckedCreateInput>;
};
/**
 * Diagnosis createMany
 */
export type DiagnosisCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnoses.
     */
    data: Prisma.DiagnosisCreateManyInput | Prisma.DiagnosisCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Diagnosis createManyAndReturn
 */
export type DiagnosisCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * The data used to create many Diagnoses.
     */
    data: Prisma.DiagnosisCreateManyInput | Prisma.DiagnosisCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Diagnosis update
 */
export type DiagnosisUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    /**
     * The data needed to update a Diagnosis.
     */
    data: Prisma.XOR<Prisma.DiagnosisUpdateInput, Prisma.DiagnosisUncheckedUpdateInput>;
    /**
     * Choose, which Diagnosis to update.
     */
    where: Prisma.DiagnosisWhereUniqueInput;
};
/**
 * Diagnosis updateMany
 */
export type DiagnosisUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnoses.
     */
    data: Prisma.XOR<Prisma.DiagnosisUpdateManyMutationInput, Prisma.DiagnosisUncheckedUpdateManyInput>;
    /**
     * Filter which Diagnoses to update
     */
    where?: Prisma.DiagnosisWhereInput;
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number;
};
/**
 * Diagnosis updateManyAndReturn
 */
export type DiagnosisUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * The data used to update Diagnoses.
     */
    data: Prisma.XOR<Prisma.DiagnosisUpdateManyMutationInput, Prisma.DiagnosisUncheckedUpdateManyInput>;
    /**
     * Filter which Diagnoses to update
     */
    where?: Prisma.DiagnosisWhereInput;
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Diagnosis upsert
 */
export type DiagnosisUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    /**
     * The filter to search for the Diagnosis to update in case it exists.
     */
    where: Prisma.DiagnosisWhereUniqueInput;
    /**
     * In case the Diagnosis found by the `where` argument doesn't exist, create a new Diagnosis with this data.
     */
    create: Prisma.XOR<Prisma.DiagnosisCreateInput, Prisma.DiagnosisUncheckedCreateInput>;
    /**
     * In case the Diagnosis was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DiagnosisUpdateInput, Prisma.DiagnosisUncheckedUpdateInput>;
};
/**
 * Diagnosis delete
 */
export type DiagnosisDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    /**
     * Filter which Diagnosis to delete.
     */
    where: Prisma.DiagnosisWhereUniqueInput;
};
/**
 * Diagnosis deleteMany
 */
export type DiagnosisDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnoses to delete
     */
    where?: Prisma.DiagnosisWhereInput;
    /**
     * Limit how many Diagnoses to delete.
     */
    limit?: number;
};
/**
 * Diagnosis.patient
 */
export type Diagnosis$patientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: Prisma.PatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Patient
     */
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
};
/**
 * Diagnosis without action
 */
export type DiagnosisDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Diagnosis.d.ts.map