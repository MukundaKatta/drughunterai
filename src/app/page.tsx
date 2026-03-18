'use client'

import { useEffect } from 'react'
import { useStore } from '@/lib/store'
import { mockNodes, mockEdges, mockTargets, mockSuggestions, mockPathways } from '@/lib/mock-data'
import KnowledgeGraph from '@/components/KnowledgeGraph'
import TargetIdentification from '@/components/TargetIdentification'
import DrugRepurposing from '@/components/DrugRepurposing'
import PathwayVisualization from '@/components/PathwayVisualization'
import { Search, Network, Target, Recycle, GitBranch } from 'lucide-react'

const tabs = [
  { id: 'graph' as const, label: 'Knowledge Graph', icon: Network },
  { id: 'targets' as const, label: 'Target ID', icon: Target },
  { id: 'repurposing' as const, label: 'Repurposing', icon: Recycle },
  { id: 'pathways' as const, label: 'Pathways', icon: GitBranch },
]

export default function Home() {
  const { activeTab, setActiveTab, setNodes, setEdges, setTargets, setSuggestions, setPathways } = useStore()

  useEffect(() => {
    setNodes(mockNodes); setEdges(mockEdges); setTargets(mockTargets); setSuggestions(mockSuggestions); setPathways(mockPathways)
  }, [setNodes, setEdges, setTargets, setSuggestions, setPathways])

  const renderTab = () => {
    switch (activeTab) {
      case 'graph': return <KnowledgeGraph />
      case 'targets': return <TargetIdentification />
      case 'repurposing': return <DrugRepurposing />
      case 'pathways': return <PathwayVisualization />
    }
  }

  return (
    <div className="min-h-screen">
      <header className="glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
            <Search className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">DrugHunterAI</h1>
            <p className="text-[10px] text-white/40">Knowledge Graph Drug Discovery</p>
          </div>
        </div>
        <nav className="flex gap-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === id ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-white/50 hover:bg-white/5'
              }`}>
              <Icon className="w-4 h-4" />{label}
            </button>
          ))}
        </nav>
      </header>
      <main className="p-6">{renderTab()}</main>
    </div>
  )
}
