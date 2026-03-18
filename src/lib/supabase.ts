import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export type KGNode = { id: string; label: string; type: 'disease' | 'gene' | 'drug' | 'pathway' | 'protein'; properties: Record<string, any> }
export type KGEdge = { id: string; source: string; target: string; relationship: string; confidence: number; evidence_count: number }
export type LiteratureTarget = { id: string; gene: string; disease: string; score: number; publications: number; evidence_summary: string; created_at: string }
export type RepurposingSuggestion = { id: string; drug_name: string; original_indication: string; proposed_indication: string; confidence: number; mechanism: string; supporting_evidence: number; created_at: string }
export type Pathway = { id: string; name: string; genes: string[]; drugs_targeting: number; disease_associations: string[]; created_at: string }
