import { create } from 'zustand'
import type { KGNode, KGEdge, LiteratureTarget, RepurposingSuggestion, Pathway } from './supabase'

type Tab = 'graph' | 'targets' | 'repurposing' | 'pathways'

interface DrugHunterState {
  activeTab: Tab; setActiveTab: (t: Tab) => void
  nodes: KGNode[]; setNodes: (n: KGNode[]) => void
  edges: KGEdge[]; setEdges: (e: KGEdge[]) => void
  targets: LiteratureTarget[]; setTargets: (t: LiteratureTarget[]) => void
  suggestions: RepurposingSuggestion[]; setSuggestions: (s: RepurposingSuggestion[]) => void
  pathways: Pathway[]; setPathways: (p: Pathway[]) => void
}

export const useStore = create<DrugHunterState>((set) => ({
  activeTab: 'graph', setActiveTab: (activeTab) => set({ activeTab }),
  nodes: [], setNodes: (nodes) => set({ nodes }),
  edges: [], setEdges: (edges) => set({ edges }),
  targets: [], setTargets: (targets) => set({ targets }),
  suggestions: [], setSuggestions: (suggestions) => set({ suggestions }),
  pathways: [], setPathways: (pathways) => set({ pathways }),
}))
