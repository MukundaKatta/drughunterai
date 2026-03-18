'use client'
import { useStore } from '@/lib/store'
import { GitBranch, Dna, Pill } from 'lucide-react'
export default function PathwayVisualization() {
  const { pathways } = useStore()
  return (
    <div className="space-y-6 h-[calc(100vh-120px)] overflow-auto">
      <h2 className="text-lg font-bold">Pathway Visualization</h2>
      {pathways.map(p => (
        <div key={p.id} className="glass p-6">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold">{p.name}</h3>
          </div>
          {/* Simple pathway visualization */}
          <div className="flex flex-wrap gap-2 mb-4">
            {p.genes.map((gene, i) => (
              <div key={gene} className="flex items-center gap-1">
                <div className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-300 text-sm font-mono flex items-center gap-1">
                  <Dna className="w-3 h-3" />{gene}
                </div>
                {i < p.genes.length - 1 && <span className="text-white/20">→</span>}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 rounded-xl bg-white/5">
              <p className="text-[10px] text-white/40">Genes in Pathway</p>
              <p className="text-xl font-bold text-blue-400">{p.genes.length}</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <p className="text-[10px] text-white/40">Drugs Targeting</p>
              <p className="text-xl font-bold text-emerald-400 flex items-center gap-1"><Pill className="w-4 h-4" />{p.drugs_targeting}</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <p className="text-[10px] text-white/40">Disease Associations</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {p.disease_associations.map(d => <span key={d} className="px-1.5 py-0.5 rounded text-[10px] bg-red-500/10 text-red-300">{d}</span>)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
