import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = { title: 'DrugHunterAI - Knowledge Graph Drug Discovery', description: 'AI-powered drug discovery with knowledge graph, drug repurposing, and pathway visualization' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>
}
