import type { KGNode, KGEdge, LiteratureTarget, RepurposingSuggestion, Pathway } from './supabase'

export const mockNodes: KGNode[] = [
  { id: 'n1', label: 'NSCLC', type: 'disease', properties: { prevalence: 'high' } },
  { id: 'n2', label: 'EGFR', type: 'gene', properties: { chromosome: '7' } },
  { id: 'n3', label: 'Osimertinib', type: 'drug', properties: { phase: 'Approved' } },
  { id: 'n4', label: 'KRAS', type: 'gene', properties: { chromosome: '12' } },
  { id: 'n5', label: 'Sotorasib', type: 'drug', properties: { phase: 'Approved' } },
  { id: 'n6', label: 'RAS/MAPK', type: 'pathway', properties: {} },
  { id: 'n7', label: 'Breast Cancer', type: 'disease', properties: { prevalence: 'high' } },
  { id: 'n8', label: 'HER2', type: 'gene', properties: { chromosome: '17' } },
  { id: 'n9', label: 'Trastuzumab', type: 'drug', properties: { phase: 'Approved' } },
  { id: 'n10', label: 'PI3K/AKT', type: 'pathway', properties: {} },
  { id: 'n11', label: 'ALK', type: 'gene', properties: { chromosome: '2' } },
  { id: 'n12', label: 'Crizotinib', type: 'drug', properties: { phase: 'Approved' } },
  { id: 'n13', label: 'Melanoma', type: 'disease', properties: {} },
  { id: 'n14', label: 'BRAF', type: 'gene', properties: { chromosome: '7' } },
  { id: 'n15', label: 'Dabrafenib', type: 'drug', properties: { phase: 'Approved' } },
]

export const mockEdges: KGEdge[] = [
  { id: 'e1', source: 'n1', target: 'n2', relationship: 'associated_gene', confidence: 0.95, evidence_count: 1200 },
  { id: 'e2', source: 'n2', target: 'n3', relationship: 'targeted_by', confidence: 0.98, evidence_count: 800 },
  { id: 'e3', source: 'n1', target: 'n4', relationship: 'associated_gene', confidence: 0.90, evidence_count: 950 },
  { id: 'e4', source: 'n4', target: 'n5', relationship: 'targeted_by', confidence: 0.92, evidence_count: 350 },
  { id: 'e5', source: 'n4', target: 'n6', relationship: 'part_of', confidence: 0.99, evidence_count: 2000 },
  { id: 'e6', source: 'n2', target: 'n6', relationship: 'part_of', confidence: 0.97, evidence_count: 1800 },
  { id: 'e7', source: 'n7', target: 'n8', relationship: 'associated_gene', confidence: 0.96, evidence_count: 1100 },
  { id: 'e8', source: 'n8', target: 'n9', relationship: 'targeted_by', confidence: 0.99, evidence_count: 1500 },
  { id: 'e9', source: 'n8', target: 'n10', relationship: 'part_of', confidence: 0.88, evidence_count: 600 },
  { id: 'e10', source: 'n1', target: 'n11', relationship: 'associated_gene', confidence: 0.85, evidence_count: 400 },
  { id: 'e11', source: 'n11', target: 'n12', relationship: 'targeted_by', confidence: 0.90, evidence_count: 500 },
  { id: 'e12', source: 'n13', target: 'n14', relationship: 'associated_gene', confidence: 0.94, evidence_count: 800 },
  { id: 'e13', source: 'n14', target: 'n15', relationship: 'targeted_by', confidence: 0.96, evidence_count: 700 },
  { id: 'e14', source: 'n14', target: 'n6', relationship: 'part_of', confidence: 0.98, evidence_count: 1200 },
]

export const mockTargets: LiteratureTarget[] = [
  { id: '1', gene: 'KRASG12D', disease: 'Pancreatic Cancer', score: 0.92, publications: 245, evidence_summary: 'Strong genetic evidence with emerging allele-specific inhibitors', created_at: '2026-01-01T10:00:00Z' },
  { id: '2', gene: 'CDK12', disease: 'Ovarian Cancer', score: 0.78, publications: 82, evidence_summary: 'Loss-of-function mutations create neoantigen burden and immunotherapy sensitivity', created_at: '2026-01-05T10:00:00Z' },
  { id: '3', gene: 'TROP2', disease: 'Triple-Negative Breast Cancer', score: 0.88, publications: 156, evidence_summary: 'Validated ADC target with multiple approved therapies', created_at: '2026-01-10T10:00:00Z' },
  { id: '4', gene: 'FGFR2', disease: 'Cholangiocarcinoma', score: 0.85, publications: 98, evidence_summary: 'Frequent fusions/amplifications, selective inhibitors show durable responses', created_at: '2026-01-15T10:00:00Z' },
]

export const mockSuggestions: RepurposingSuggestion[] = [
  { id: '1', drug_name: 'Metformin', original_indication: 'Type 2 Diabetes', proposed_indication: 'Colorectal Cancer Prevention', confidence: 0.72, mechanism: 'AMPK activation, mTOR inhibition', supporting_evidence: 45, created_at: '2026-02-01T10:00:00Z' },
  { id: '2', drug_name: 'Thalidomide', original_indication: 'Multiple Myeloma', proposed_indication: 'Graft-versus-Host Disease', confidence: 0.80, mechanism: 'TNF-alpha inhibition, immunomodulation', supporting_evidence: 28, created_at: '2026-02-05T10:00:00Z' },
  { id: '3', drug_name: 'Propranolol', original_indication: 'Hypertension', proposed_indication: 'Infantile Hemangioma', confidence: 0.95, mechanism: 'Beta-adrenergic antagonism, VEGF downregulation', supporting_evidence: 120, created_at: '2026-02-10T10:00:00Z' },
  { id: '4', drug_name: 'Sildenafil', original_indication: 'Erectile Dysfunction', proposed_indication: 'Pulmonary Hypertension', confidence: 0.98, mechanism: 'PDE5 inhibition in pulmonary vasculature', supporting_evidence: 200, created_at: '2026-02-15T10:00:00Z' },
]

export const mockPathways: Pathway[] = [
  { id: '1', name: 'RAS/MAPK Signaling', genes: ['KRAS', 'NRAS', 'HRAS', 'BRAF', 'MEK1', 'MEK2', 'ERK1', 'ERK2'], drugs_targeting: 12, disease_associations: ['NSCLC', 'Melanoma', 'Colorectal Cancer', 'Pancreatic Cancer'], created_at: '2026-01-01T10:00:00Z' },
  { id: '2', name: 'PI3K/AKT/mTOR', genes: ['PIK3CA', 'AKT1', 'AKT2', 'MTOR', 'PTEN', 'TSC1', 'TSC2'], drugs_targeting: 8, disease_associations: ['Breast Cancer', 'Endometrial Cancer', 'Ovarian Cancer'], created_at: '2026-01-05T10:00:00Z' },
  { id: '3', name: 'Cell Cycle Control', genes: ['CDK4', 'CDK6', 'CDK2', 'RB1', 'CCND1', 'CDKN2A', 'TP53'], drugs_targeting: 6, disease_associations: ['Breast Cancer', 'NSCLC', 'Melanoma'], created_at: '2026-01-10T10:00:00Z' },
  { id: '4', name: 'DNA Damage Repair', genes: ['BRCA1', 'BRCA2', 'ATM', 'ATR', 'PARP1', 'RAD51'], drugs_targeting: 5, disease_associations: ['Breast Cancer', 'Ovarian Cancer', 'Prostate Cancer'], created_at: '2026-01-15T10:00:00Z' },
]
