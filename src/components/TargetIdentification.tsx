'use client'
import { useStore } from '@/lib/store'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Target, BookOpen } from 'lucide-react'
export default function TargetIdentification() {
  const { targets } = useStore()
  const chartData = targets.map(t => ({ name: t.gene, score: t.score * 100, pubs: t.publications }))
  return (
    <div className="space-y-6 h-[calc(100vh-120px)] overflow-auto">
      <h2 className="text-lg font-bold">AI Target Identification from Literature</h2>
      <div className="glass p-4">
        <h3 className="text-sm font-semibold text-white/70 mb-4">TARGET CONFIDENCE SCORES</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} />
            <YAxis tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} />
            <Tooltip contentStyle={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }} />
            <Bar dataKey="score" fill="#eab308" radius={[4, 4, 0, 0]} name="Confidence %" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {targets.map(t => (
        <div key={t.id} className="glass p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2"><Target className="w-5 h-5 text-amber-400" /><div><p className="font-bold text-lg">{t.gene}</p><p className="text-xs text-white/40">{t.disease}</p></div></div>
            <p className="text-2xl font-bold text-amber-400">{(t.score * 100).toFixed(0)}%</p>
          </div>
          <p className="text-sm text-white/70 mb-2">{t.evidence_summary}</p>
          <div className="flex items-center gap-1 text-xs text-white/40"><BookOpen className="w-3 h-3" />{t.publications} publications</div>
        </div>
      ))}
    </div>
  )
}
