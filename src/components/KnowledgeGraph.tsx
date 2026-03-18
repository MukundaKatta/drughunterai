'use client'

import { useEffect, useRef, useState } from 'react'
import { useStore } from '@/lib/store'
import * as d3 from 'd3'

const typeColors: Record<string, string> = { disease: '#ef4444', gene: '#3b82f6', drug: '#10b981', pathway: '#f59e0b', protein: '#8b5cf6' }
const typeRadii: Record<string, number> = { disease: 25, gene: 18, drug: 20, pathway: 22, protein: 16 }

export default function KnowledgeGraph() {
  const { nodes, edges } = useStore()
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || nodes.length === 0) return
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const width = svgRef.current.clientWidth
    const height = svgRef.current.clientHeight

    const g = svg.append('g')

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.3, 5]).on('zoom', (event) => {
      g.attr('transform', event.transform)
    })
    svg.call(zoom)

    const simNodes = nodes.map(n => ({ ...n })) as any[]
    const simLinks = edges.map(e => ({ ...e, source: e.source, target: e.target })) as any[]

    const simulation = d3.forceSimulation(simNodes)
      .force('link', d3.forceLink(simLinks).id((d: any) => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(40))

    // Links
    const link = g.append('g').selectAll('line').data(simLinks).join('line')
      .attr('stroke', 'rgba(255,255,255,0.15)').attr('stroke-width', (d: any) => Math.max(1, d.confidence * 3))

    // Link labels
    const linkLabel = g.append('g').selectAll('text').data(simLinks).join('text')
      .text((d: any) => d.relationship.replace('_', ' ')).attr('fill', 'rgba(255,255,255,0.3)')
      .attr('font-size', '8px').attr('text-anchor', 'middle')

    // Nodes
    const node = g.append('g').selectAll('g').data(simNodes).join('g')
      .call(d3.drag<any, any>().on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x; d.fy = d.y
      }).on('drag', (event, d) => {
        d.fx = event.x; d.fy = event.y
      }).on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null; d.fy = null
      }))

    node.append('circle')
      .attr('r', (d: any) => typeRadii[d.type] || 15)
      .attr('fill', (d: any) => typeColors[d.type] || '#666')
      .attr('opacity', 0.8)
      .attr('stroke', 'rgba(255,255,255,0.3)')
      .attr('stroke-width', 1.5)
      .style('cursor', 'pointer')

    node.append('text')
      .text((d: any) => d.label)
      .attr('fill', 'white').attr('font-size', '10px').attr('text-anchor', 'middle').attr('dy', '0.35em')
      .style('pointer-events', 'none')

    simulation.on('tick', () => {
      link.attr('x1', (d: any) => d.source.x).attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x).attr('y2', (d: any) => d.target.y)
      linkLabel.attr('x', (d: any) => (d.source.x + d.target.x) / 2).attr('y', (d: any) => (d.source.y + d.target.y) / 2)
      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`)
    })

    return () => { simulation.stop() }
  }, [nodes, edges])

  return (
    <div className="grid grid-cols-4 gap-6 h-[calc(100vh-120px)]">
      <div className="glass p-4 overflow-auto">
        <h3 className="text-sm font-semibold text-white/70 mb-3">GRAPH LEGEND</h3>
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-sm capitalize text-white/70">{type}</span>
            <span className="text-xs text-white/30 ml-auto">{nodes.filter(n => n.type === type).length}</span>
          </div>
        ))}
        <div className="mt-4 p-3 rounded-xl bg-white/5">
          <p className="text-xs text-white/50">Graph Stats</p>
          <p className="text-sm font-bold text-amber-300">{nodes.length} nodes, {edges.length} edges</p>
        </div>
        <h3 className="text-sm font-semibold text-white/70 mt-4 mb-2">ENTITIES</h3>
        <div className="space-y-1">
          {nodes.map(n => (
            <div key={n.id} className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/5 cursor-pointer text-xs">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: typeColors[n.type] }} />
              <span className="text-white/60">{n.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3 glass overflow-hidden">
        <svg ref={svgRef} className="w-full h-full" />
      </div>
    </div>
  )
}
