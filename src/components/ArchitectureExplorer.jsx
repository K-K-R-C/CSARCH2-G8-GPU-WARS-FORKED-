import React, { useState } from 'react';
import "../styles/architecture-explorer.css";

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
      <div className="architecture-explorer">
      <div className="explorer-header">
        <h3>
            GPU Architecture Explorer
        </h3>

        <p>
            Explore how GPUs evolved from fixed-function graphics
            hardware into AI-powered parallel processors.
        </p>
      </div>
      
      {/* Navigation Tabs */}
        <div className="gpu-tabs">
        {gpuGenerations.map((gpu) => (
          <button
            key={gpu.id}
            onClick={() => setActiveGpu(gpu)}
            className={
                activeGpu.id === gpu.id
                ? "gpu-tab active"
                : "gpu-tab"
            }
          >
            {gpu.name}
          </button>
        ))}
      </div>

      {/* Content Display Panel */}
      <div className="gpu-info-card">
        <h4 className="gpu-title">
          {activeGpu.name}
        </h4>
        
        <p style={{ fontSize: '1.1rem' }}><strong>Primary Purpose:</strong> {activeGpu.purpose}</p>
        
        <div className="gpu-details">
          <div>
            <strong style={{ color: '#c9a84c' }}>Key Architectural Features:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              {activeGpu.features.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <strong style={{ color: '#c9a84c' }}>Supported Workloads:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              {activeGpu.workloads.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <strong style={{ color: '#c9a84c' }}>Major Innovations:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              {activeGpu.innovations.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
