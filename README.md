# DrugHunterAI

> Knowledge Graph-Powered Drug Discovery Platform

DrugHunterAI accelerates pharmaceutical research by combining knowledge graphs, AI-driven target identification, drug repurposing analysis, and biological pathway visualization into an integrated discovery workspace.

## Features

- **Knowledge Graph** -- Interactive graph visualization of drug-target-disease relationships
- **Target Identification** -- AI-powered discovery of novel therapeutic targets
- **Drug Repurposing** -- Identify existing drugs that may treat new indications
- **Pathway Visualization** -- Explore biological signaling pathways and their drug interactions
- **Search and Filter** -- Quickly find compounds, targets, and diseases across the graph

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Visualization:** D3.js, Recharts
- **Database:** Supabase (PostgreSQL)
- **State Management:** Zustand
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your SUPABASE_URL and SUPABASE_ANON_KEY

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    page.tsx                    # Main application with header navigation
  components/
    KnowledgeGraph.tsx          # Interactive D3 knowledge graph
    TargetIdentification.tsx    # AI target discovery panel
    DrugRepurposing.tsx         # Repurposing suggestions
    PathwayVisualization.tsx    # Biological pathway diagrams
  lib/
    store.ts                    # Zustand state management
    mock-data.ts                # Sample nodes, edges, targets, pathways
```

