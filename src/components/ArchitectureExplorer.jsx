import React, { useState } from 'react';

const gpuGenerations = [
  {
    id: 'voodoo',
    name: 'Voodoo Graphics (1996)',
    purpose: '3D Graphics Acceleration',
    features: ['Fixed-function pipeline', 'Hardware rasterization', 'Single-cycle texture mapping'],
    workloads: ['Early 3D PC Games', 'Software-to-hardware rendering transition'],
    innovations: ['First widely successful consumer 3D accelerator']
  },
  {
    id: 'geforce256',
    name: 'GeForce 256 (1999)',
    purpose: 'Advanced 3D Rendering',
    features: ['Hardware Transform and Lighting (T&L)', 'Single-chip 2D/3D video accelerator'],
    workloads: ['Complex 3D games', 'Early CAD applications'],
    innovations: ['Introduction of the "GPU" concept', 'Offloaded geometry processing from the CPU']
  },
  {
    id: 'cuda',
    name: 'CUDA-era GPUs (2007)',
    purpose: 'General-Purpose Parallel Computing',
    features: ['Unified shader architecture', 'Streaming Multiprocessors (SMs)', 'SIMT execution'],
    workloads: ['Scientific simulations', 'Video rendering', 'Early deep learning'],
    innovations: ['Made GPUs programmable for non-graphics tasks using C/C++']
  },
  {
    id: 'rtx',
    name: 'RTX GPUs (2018)',
    purpose: 'Real-Time Ray Tracing and AI Rendering',
    features: ['RT Cores', 'Tensor Cores', 'Concurrent integer/floating-point execution'],
    workloads: ['Photorealistic gaming', '3D animation', 'AI upscaling (DLSS)'],
    innovations: ['First consumer GPUs capable of real-time ray tracing']
  },
  {
    id: 'ai',
    name: 'AI Accelerators (2022-Present)',
    purpose: 'AI Training and Inference',
    features: ['Transformer Engines', 'High Bandwidth Memory (HBM)', 'Massive scale parallelism'],
    workloads: ['Large Language Models (LLMs)', 'Generative AI', 'Supercomputing'],
    innovations: ['GPU becomes core infrastructure for the AI revolution']
  }
];

export default function ArchitectureExplorer() {
  const [activeGpu, setActiveGpu] = useState(gpuGenerations[0]);

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#1e1f22', border: '1px solid #333', borderRadius: '8px', color: '#e1e1e1', fontFamily: 'sans-serif', margin: '2rem 0' }}>
      <h3 style={{ marginTop: 0, color: '#fff' }}>Interactive GPU Architecture Explorer</h3>
      
      {/* Navigation Tabs */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {gpuGenerations.map((gpu) => (
          <button
            key={gpu.id}
            onClick={() => setActiveGpu(gpu)}
            style={{
              padding: '0.6rem 1rem',
              backgroundColor: activeGpu.id === gpu.id ? '#bc52ee' : '#2d2f33',
              color: '#fff',
              border: '1px solid #444',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: activeGpu.id === gpu.id ? 'bold' : 'normal',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {gpu.name}
          </button>
        ))}
      </div>

      {/* Content Display Panel */}
      <div style={{ backgroundColor: '#0d1117', padding: '1.5rem', borderRadius: '6px', border: '1px solid #30363d' }}>
        <h4 style={{ marginTop: 0, color: '#bc52ee', fontSize: '1.3rem', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
          {activeGpu.name}
        </h4>
        
        <p style={{ fontSize: '1.1rem' }}><strong>Primary Purpose:</strong> {activeGpu.purpose}</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div>
            <strong style={{ color: '#8b949e' }}>Key Architectural Features:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              {activeGpu.features.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <strong style={{ color: '#8b949e' }}>Supported Workloads:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              {activeGpu.workloads.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <strong style={{ color: '#8b949e' }}>Major Innovations:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              {activeGpu.innovations.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
