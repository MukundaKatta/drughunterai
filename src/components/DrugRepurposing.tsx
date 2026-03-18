'use client'
import { useStore } from '@/lib/store'
import { Recycle, ArrowRight } from 'lucide-react'
export default function DrugRepurposing() {
  const { suggestions } = useStore()
  return (
    <div className="space-y-6 h-[calc(100vh-120px)] overflow-auto">
      <h2 className="text-lg font-bold">Drug Repurposing Suggestions</h2>
      {suggestions.map(s => (
        <div key={s.id} className="glass p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-amber-500/10"><Recycle className="w-6 h-6 text-amber-400" /></div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{s.drug_name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-white/50">{s.original_indication}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-300 font-medium">{s.proposed_indication}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-amber-400">{(s.confidence * 100).toFixed(0)}%</p>
              <p className="text-[10px] text-white/40">Confidence</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 rounded-xl bg-white/5"><p className="text-[10px] text-white/40">Mechanism</p><p className="text-sm text-white/70">{s.mechanism}</p></div>
            <div className="p-3 rounded-xl bg-white/5"><p className="text-[10px] text-white/40">Supporting Evidence</p><p className="text-xl font-bold text-amber-300">{s.supporting_evidence}</p></div>
            <div className="p-3 rounded-xl bg-white/5"><p className="text-[10px] text-white/40">Confidence</p>
              <div className="mt-1 h-3 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-amber-500 rounded-full" style={{ width: `${s.confidence * 100}%` }} /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
