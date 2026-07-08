# CSARCH2-G8-GPU-WARS

**Title**: GPU Wars: Five Turning Points That Changed Computing  
**GitHub Link**: https://github.com/K-K-R-C/CSARCH2-G8-GPU-WARS/blob/main/README.md
**Live Site:** [https://k-k-r-c.github.io/CSARCH2-G8-GPU-WARS-FORKED-/](https://k-k-r-c.github.io/CSARCH2-G8-GPU-WARS-FORKED-/)

### Group Members
* BENDOL, Trisha Mae R.
* CAMATO, Karl Kristoffer R.
* DESCALZO, Alberto Miguel T.
* GREGORIO, John Marc Joepherl M.
* MARTIN, Kurt Nehemiah Z.

## Topic Theme
Every frame rendered in a video game, every AI-generated image and every large language model relies on a technology that was originally designed for a much simpler purpose: drawing graphics faster.

The Graphics Processing Unit (GPU) has undergone one of the most significant architectural transformations in computing history. What began as dedicated hardware for 3D graphics evolved into a massive computing platform that powers artificial intelligence, scientific simulations and modern super computers.

This exhibit explores five major turning points that shaped the evolution of the GPU and examines how it became one of the most important technologies in modern computing.

## Tech Stack
### Frontend Technologies
| Technology  | Role |
| ------------- | ------------- |
| Astro 6 | Primary framework for exhibit development and integration with the museum website  |
| React (JSX) | Interactive educational components and visualizations  |
| MDX | Combines exhibit content with embedded React components  |
| CSS | Styling, animations and responsive layouts  |

* **Astro 6**
  
Astro will serve as the foundation of the virtual exhibit. It provides compatibility with the museum template, while also allowing for interactive React components to be integrated within MDX content.

Planned uses:
1. Exhibit page rendering
2.  Component integration
3. Static site generation

* **React (JSX)**
  
React will be used to build the interactive elements that allow visitors to explore GPU history and architecture.

Planned uses:
1. Interactive Timeline
2. GPU Architecture Explorer
3. GPU Generation Comparison Tool

* **MDX**
  
MDX will be used to combine written explanations with interactive components in a seamless exhibit format.

It will support:
1. Historical Narratives
2. Technical explanations
3. Embedded interactive visuals

* **CSS**
  
CSS will be used to create a modern digital museum aesthetic inspired by GPU hardware and computing systems.

Design features include:
1. Dark-themed interface
2. Card-based layouts
3. Smooth transitions and animations
4. Responsive desktop/mobile design

---

### Backend Technologies
| Technology  | Role |  
| ------------- | ------------- |
| Node.js  |  Ensures compatibility with modern JavaScript tooling and supports deployment of the exhibit website.  |
| Express  | Will only be used if needed for additional functionality in future development.  |

* **Node.js**
  
Node.js will be used as the local runtime environment required by Astro for development and build processes.

* **Express**
  
Possible uses:
1. Storing user interaction data (e.g., GPU comparison results)
2. Logging exploration activity
3. Supporting future expansion of interactive components


## I. Exhibit Narrative
### 1.) Introduction: The Rise of GPU
   
Today, GPUs power video games, artificial intelligence, and scientific simulations. However, they were originally designed to solve a much narrower problem: rendering graphics efficiently.

This exhibit explores how that specialized hardware evolved into one of the most important computing platforms in modern history.

### 2.) Before Dedicated Graphics Hardware
Before GPUs existed, all graphics processing was handled by the CPU. 

Topics covered include:
* CPU-based rendering
* Software rasterization
* Performance bottlenecks
* Increasing demand for 3D graphics
  
**Key Idea**:
As graphical demands increased, general-purpose CPUs became insufficient for real-time rendering workloads.


### 3.) Five Turning Points in GPU History
This section is the core of the exhibit and is presented as an interactive timeline.

#### a. Turning Point #1 - 1996
*3dfx Voodoo Graphics*
- First widely successful consumer 3D accelerator

#### b. Turning Point #2 - 1999
*GeForce 256*
- Introduction of the “GPU” concept with hardware transform and lighting

#### c. Turning Point #3 - 2007
*CUDA*
- GPUs become general-purpose parallel computing devices

#### d. Turning Point #4 - 2018
*RTX 20 Series*
- Introduction of ray tracing and AI-assisted rendering hardware

#### e. Turning Point #5 - 2022-Present
*AI Supercomputing Era*
- GPU’s become core infrastructure for AI training and inference

### 4.) Evolution of GPU Architecture

This section explores the major architectural developments that transformed GPUs from specialized graphics accelerators into powerful platforms for scientific computing, real-time rendering, and artificial intelligence.

**Architectural Progression**

    Fixed-Function Pipeline  
    ↓  
    Transform and Lighting Hardware  
    ↓  
    Programmable Shaders  
    ↓  
    CUDA (General-Purpose Computing)  
    ↓  
    RT Cores (Ray Tracing)  
    ↓  
    Tensor Cores (AI Acceleration)
#### Key Takeaway

- Hardware acceleration
- Parallel processing
- Programmable hardware design
- Specialized compute units
- Throughput-oriented architecture


### 5.) GPU Competition (“GPU Wars”)
GPU evolution was strongly shaped by competition between hardware manufacturers.

Topics covered include:
- 3dfx Vs. NVIDIA (Early 3D graphics era)
- NVIDIA Vs. ATI/AMD (GPU standardization era)
- NVIDIA Vs. AMD Vs. Intel (AI computing era)

**Key Idea**:
Competition between companies accelerated architectural innovation and pushed GPUs into new computing domains.

### 6.) Conclusion and Legacy
The GPU is now a foundational component of modern computing systems.

Without GPUs:
- Modern 3D graphics would not exist at scale
- Scientific simulations would be significantly slower
- Machine learning would be impractical
- Large language models would not be feasible

**Final Statement**:

The GPU did not just improve graphics performance, but it also fundamentally changed the nature of computing.

## II. Computer Architecture Concepts (Updated)
This exhibit directly connects GPU history to core CSARCH principles.

**a. Hardware Acceleration**

  Specialized hardware improves performance for specific workloads.

**b. Parallel Processing**

  GPUs execute thousands of operations simultaneously.

**c. Programmable Architectures**

  Transition from fixed-function pipelines to flexible compute systems.

**d. Specialized Processing Units**

  Introduction of RT Cores and Tensor Cores.

**e. Throughput-Oriented Design**

  Optimization for massive data processing rather than single-task speed.

## III. Visitor Experience and Interactive Features
### 1.) Interactive Timeline (Main Component)
Visitors explore GPU history through a clickable timeline of major milestones.

Features: 
- Historical explanations
- Visual diagrams
- Architectural breakdowns
- Key innovations per era


### 2.) GPU Architecture Explorer
Visitors can select a GPU generation and explore its architecture.

Each selection shows:
- Primary purpose
- Key architectural features
- Supported workloads
- Major innovations

#### Possible comparisons:

| # | Comparison |
|---|------------|
| 1 | Voodoo Graphics (1996) |
| 2 | GeForce 256 (1999) |
| 3 | CUDA-era GPUs |
| 4 | RTX GPUs |
| 5 | AI accelerators |


### 3.) GPU Generation Comparison Tool (possible future component)
A side-by-side comparison tool where users select two GPU generations to compare.

#### Example Comparisons:

| # | Comparison |
|---|------------|
| 1 | GeForce 256 vs. RTX GPU |
| 2 | GTX Era vs. H100 |
| 3 | Gaming GPU vs. AI GPU |

Displayed data:
- Year of release
- Intended purpose
- Architecture type
- Memory system
- Specialized hardware
- Typical workloads

**Educational Goal**:

Helps users visually understand how GPU architecture evolved over time in terms of complexity, specialization and computing capability.

## IV. Visual Design Direction And Layout Snapshot
**Theme:** Modern Technology Museum / GPU Architecture Exhibit

**Key Design Features**
- Dark semiconductor-inspired aesthetic
- Card-based information panels
- Interactive timeline animations
- Circuit-themed visual accents

**Planned Display (Updated)**
<img width="1898" height="1198" alt="720654600_1329350381895691_7444397296347780258_n" src="https://github.com/user-attachments/assets/96c74acb-4d81-4266-b5b9-3e846723b6c5" />
<img width="1900" height="1197" alt="720919235_1349271170421287_3978395389256981937_n" src="https://github.com/user-attachments/assets/5d5b772c-dcc1-4af2-9d60-8eee21c73233" />


## V. Planned React Components

| Component | Purpose |
|-----------|---------|
| `InteractiveTimeline.jsx` | Main timeline of GPU milestones |
| `TimelineEvent.jsx` | Individual timeline entries |
| `ArchitectureExplorer.jsx` | GPU architecture breakdown viewer |
| `GPUComparisonTool.jsx` | Side-by-side GPU generation comparison |
| `GPUInfoCard.jsx` | Displays structured GPU details |

## Deployment & System Support

**Live Site:** [https://k-k-r-c.github.io/CSARCH2-G8-GPU-WARS-FORKED-/](https://k-k-r-c.github.io/CSARCH2-G8-GPU-WARS-FORKED-/)

Deployed via **GitHub Pages**, using GitHub Actions for CI/CD. The site automatically rebuilds and redeploys whenever changes are pushed to the `main` branch.
