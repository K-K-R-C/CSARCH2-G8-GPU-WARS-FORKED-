import { useState, useEffect, useRef } from "react";

type Tab = "prologue" | "timeline" | "lab" | "archives" | "crew";

const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  opacity: Math.random() * 0.6 + 0.2,
}));

const timelineEvents = [
  {
    era: "Before 1996",
    title: "THE CPU EMPIRE",
    desc: "Fixed pipelines. Software renderers. The dark age of triangles.",
    active: false,
  },
  {
    era: "1996",
    title: "3DFX VOODOO GRAPHICS",
    desc: "A new hope. Consumer 3D acceleration ignites the GPU war.",
    active: true,
  },
  {
    era: "1999",
    title: "GEFORCE 256",
    desc: "NVIDIA christens the GPU. T&L leaves the CPU forever.",
    active: true,
  },
  {
    era: "2001–2006",
    title: "THE SHADER REVOLUTION",
    desc: "Programmable pipelines – the Force awakens in rendering.",
    active: true,
  },
  {
    era: "2007",
    title: "CUDA RELEASED",
    desc: "The GPU becomes a supercomputer. AI and science follow.",
    active: true,
  },
];

const fullTimeline = [
  {
    era: "Before 1996",
    title: "THE CPU EMPIRE",
    desc: "Fixed pipelines. Software renderers. The dark age of triangles.",
    detail:
      "Before dedicated graphics hardware, every polygon was the CPU's burden. Software renderers like those in Quake and early flight sims showed what was possible — but at a cost. The CPU was the lone rebel, carrying every triangle across a fixed-function pipeline with no reinforcements.",
  },
  {
    era: "1996",
    title: "3DFX VOODOO GRAPHICS",
    desc: "A new hope. Consumer 3D acceleration ignites the GPU war.",
    detail:
      "The 3Dfx Voodoo chip arrived like a disturbance in the pipeline. For the first time, consumers could offload geometry and rasterization to dedicated silicon. Quake in Glide mode ran at frames the CPU could only dream of. The rebellion against software rendering had begun.",
  },
  {
    era: "1999",
    title: "GEFORCE 256",
    desc: "NVIDIA christens the GPU. T&L leaves the CPU forever.",
    detail:
      'NVIDIA coined the term "GPU" with the GeForce 256 — the first chip to include hardware transform and lighting (T&L). The CPU was freed from geometry duties entirely. A new specialist class of silicon had declared itself, and the galaxy of computing would never be the same.',
  },
  {
    era: "2001–2006",
    title: "THE SHADER REVOLUTION",
    desc: "Programmable pipelines — the Force awakens in rendering.",
    detail:
      "DirectX 8 and 9 brought vertex and pixel shaders. Fixed functions gave way to programmable stages. Artists and engineers could now write custom GPU code, unlocking bump mapping, HDR, and effects that felt like magic. The Force had truly awakened in the render pipeline.",
  },
  {
    era: "2007",
    title: "CUDA RELEASED",
    desc: "The GPU becomes a supercomputer. AI and science follow.",
    detail:
      "NVIDIA's CUDA platform transformed the GPU from a graphics specialist into a general-purpose parallel processor. Thousands of cores that once pushed pixels now simulated physics, folded proteins, and — ultimately — trained neural networks. The GPU had become the engine of the AI age.",
  },
  {
    era: "2010+",
    title: "GEFORCE GTX SERIES",
    desc: 'NVIDIA\'s GTX line: "Transform & Lighting finally leaves the CPU."',
    detail:
      "The GTX series brought Fermi and Kepler architectures, cementing NVIDIA's dominance in gaming and compute alike. Ray tracing remained a dream, but rasterization reached staggering fidelity.",
  },
  {
    era: "2018",
    title: "RTX 20 SERIES",
    desc: "Ray tracing and Tensor Cores arrive in the consumer market.",
    detail:
      "The Turing architecture introduced real-time ray tracing via dedicated RT cores and AI-powered DLSS via Tensor cores. The line between rasterization and path tracing began to blur for the first time in consumer hardware.",
  },
  {
    era: "2020s–Now",
    title: "AI SUPERCOMPUTING ERA",
    desc: "The GPU is now modeling the world. The Force is fully awakened.",
    detail:
      "GPUs now power large language models, generative image systems, and scientific simulations at planetary scale. The H100, with its Transformer Engine, is the backbone of modern AI civilization. What began as a triangle pusher now shapes the future.",
  },
];

const sidebarSections = [
  {
    num: "01",
    title: "BEFORE THE GPU",
    desc: "The Empire of fixed-function pipelines and software renderers.",
  },
  {
    num: "02",
    title: "3DFX VOODOO, 1996",
    desc: "A disturbance in the pipeline – the first strike against the CPU.",
  },
  {
    num: "03",
    title: "GEFORCE 256, 1999",
    desc: "NVIDIA names its weapon. The GPU era officially begins.",
  },
  {
    num: "04",
    title: "SHADER REVOLUTION",
    desc: "The Force becomes programmable. Artists gain the upper hand.",
  },
];

const tags = ["HARDWARE", "CUDA", "NVIDIA", "3DFX", "SHADERS", "HISTORY"];

const crew = [
  "Bendol, Trisha Mae R.",
  "Canato, Karl Kristoffer R.",
  "Descalzo, Alberto Miguel T.",
  "Gregorio, John Marc M.",
  "Martin, Kurt Nehemiah Z.",
];

function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STARS.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}

function TopBar() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = time.toLocaleTimeString("en-US", { hour12: false });
  return (
    <div
      className="flex justify-between items-center px-4 py-1 text-xs tracking-widest border-b"
      style={{
        background: "#050810",
        borderColor: "rgba(74,124,63,0.3)",
        color: "#5a7a5a",
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      <span>REBEL ALLIANCE ARCHIVES &mdash; SECTOR 76</span>
      <span>
        CLASSIFICATION: <span style={{ color: "#8dc47c" }}>OPEN</span>
        &nbsp;|&nbsp; CLEARANCE: <span style={{ color: "#8dc47c" }}>ALL</span>
        &nbsp;|&nbsp; {fmt}
      </span>
    </div>
  );
}

function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center py-10 text-center overflow-hidden"
      style={{ minHeight: 200, background: "linear-gradient(180deg,#06090e 0%,#080c10 100%)" }}
    >
      <Starfield />
      <div className="relative z-10">
        <p
          className="text-xs tracking-[0.3em] mb-2"
          style={{ color: "#6a8a6a", fontFamily: "'Share Tech Mono', monospace" }}
        >
          EPISODE I &mdash; A PIXEL HISTORY
        </p>
        <h1
          className="text-6xl md:text-7xl font-black tracking-[0.15em] mb-2"
          style={{ fontFamily: "'Orbitron', sans-serif", color: "#c8a830" }}
        >
          GPU&nbsp;WARS
        </h1>
        <p
          className="text-xs tracking-[0.3em] mb-5"
          style={{ color: "#6a8a6a", fontFamily: "'Share Tech Mono', monospace" }}
        >
          FIVE TURNING POINTS THAT CHANGED COMPUTING
        </p>
        <p
          className="max-w-md mx-auto text-sm leading-relaxed italic"
          style={{ color: "#8a9aaa", fontFamily: "'Share Tech Mono', monospace" }}
        >
          A long time ago, in a render pipeline far, far away…the CPU carried the
          burden of every triangle. Then came the GPU — and the galaxy of computing
          was never the same.
        </p>
      </div>
    </div>
  );
}

function NavTabs({ active, setActive }: { active: Tab; setActive: (t: Tab) => void }) {
  const tabs: { id: Tab; label: string }[] = [
    { id: "prologue", label: "PROLOGUE" },
    { id: "timeline", label: "THE TIMELINE" },
    { id: "lab", label: "THE LAB" },
    { id: "archives", label: "THE ARCHIVES" },
    { id: "crew", label: "THE CREW" },
  ];
  return (
    <div
      className="flex w-full"
      style={{ background: "#2d4a20", fontFamily: "'Share Tech Mono', monospace" }}
    >
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => setActive(t.id)}
          className="flex-1 py-3 text-xs tracking-widest transition-colors border-r last:border-r-0"
          style={{
            borderColor: "rgba(74,124,63,0.4)",
            background: active === t.id ? "#3d6630" : "transparent",
            color: active === t.id ? "#c8f0b0" : "#7aaa60",
            borderBottom: active === t.id ? "2px solid #8dc47c" : "2px solid transparent",
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function SectorBriefings({ activeSection, setActiveSection }: { activeSection: number; setActiveSection: (n: number) => void }) {
  return (
    <aside className="w-80 shrink-0 pl-6">
      <h3
        className="text-xs tracking-[0.25em] mb-4 pb-2 border-b"
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          color: "#c8a830",
          borderColor: "rgba(74,124,63,0.3)",
        }}
      >
        SECTOR BRIEFINGS
      </h3>
      <div className="space-y-3 mb-6">
        {sidebarSections.map((s, i) => (
          <div
            key={i}
            onClick={() => setActiveSection(i)}
            className="pl-3 py-2 cursor-pointer transition-colors"
            style={{
              borderLeft: `2px solid ${activeSection === i ? "#8dc47c" : "#2d4a20"}`,
              background: activeSection === i ? "rgba(74,124,63,0.08)" : "transparent",
            }}
          >
            <p
              className="text-xs tracking-widest mb-0.5"
              style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}
            >
              SECTION {s.num}
            </p>
            <p
              className="text-xs font-bold mb-1"
              style={{ color: "#c8f0b0", fontFamily: "'Share Tech Mono', monospace" }}
            >
              {s.title}
            </p>
            <p className="text-xs" style={{ color: "#6a7f6a", fontFamily: "'Share Tech Mono', monospace" }}>
              {s.desc}
            </p>
          </div>
        ))}
        <div
          className="pl-3 py-2"
          style={{ borderLeft: "2px solid #2d4a20" }}
        >
          <p
            className="text-xs tracking-widest mb-0.5"
            style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}
          >
            INTERACTIVE LAB
          </p>
          <p
            className="text-xs font-bold mb-1"
            style={{ color: "#c8a830", fontFamily: "'Share Tech Mono', monospace" }}
          >
            THE HOLODECK
          </p>
          <p className="text-xs" style={{ color: "#6a7f6a", fontFamily: "'Share Tech Mono', monospace" }}>
            Manipulate shaders. See the rendering revolution in real time.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <p
          className="text-xs tracking-widest mb-2"
          style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}
        >
          INTEL TAGS
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs border cursor-pointer hover:border-green-500 transition-colors"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                borderColor: "rgba(74,124,63,0.5)",
                color: "#7aaa60",
                background: "rgba(74,124,63,0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p
          className="text-xs tracking-widest mb-2"
          style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}
        >
          REBEL CREW &mdash; GROUP 8
        </p>
        <ul className="space-y-1">
          {crew.map((name) => (
            <li
              key={name}
              className="text-xs flex items-start gap-2"
              style={{ color: "#8a9aaa", fontFamily: "'Share Tech Mono', monospace" }}
            >
              <span style={{ color: "#4a7c3f" }}>&gt;</span> {name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function PrologueTab({ activeSection, setActiveSection }: { activeSection: number; setActiveSection: (n: number) => void }) {
  const sectionContent = [
    {
      title: "BEFORE THE GPU",
      body: "Before dedicated graphics hardware, every polygon was the CPU's burden. Fixed-function pipelines meant the hardware could only execute a single predefined rendering path. Software renderers like those powering early id Software titles pushed CPUs to their limits just to render wireframe geometry. The Empire of fixed silicon ruled without challenge.",
    },
    {
      title: "3DFX VOODOO GRAPHICS, 1996",
      body: "The 3Dfx Voodoo chip shattered the CPU's monopoly on rendering. For the first time, a consumer add-in board could accelerate bilinear filtering, z-buffering, and texture mapping in hardware. Quake in Glide looked like a different universe compared to software mode. The Rebellion had found its first weapon.",
    },
    {
      title: "GEFORCE 256, 1999",
      body: 'NVIDIA\'s GeForce 256 introduced hardware transform and lighting (T&L), becoming the first chip to carry the official "GPU" designation. Geometry processing moved off the CPU permanently. The GPU era officially began, and the CPU — once omnipotent — would never touch a vertex matrix again.',
    },
    {
      title: "THE SHADER REVOLUTION, 2001–2006",
      body: "DirectX 8 introduced programmable vertex and pixel shaders. For the first time, developers could write custom GPU programs that replaced fixed-function stages entirely. Bump mapping, specular highlights, and complex light models that previously required pre-baked textures became real-time. The Force had truly awakened in rendering.",
    },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <p
          className="text-xs tracking-widest mb-1"
          style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}
        >
          TRANSMISSION &mdash; PRIMARY INTEL
        </p>
        <h2
          className="text-3xl font-black mb-4"
          style={{ fontFamily: "'Orbitron', sans-serif", color: "#e0e8d0" }}
        >
          THE{" "}
          <span style={{ color: "#8dc47c" }}>GPU</span>{" "}
          STRIKES BACK
        </h2>
        <div
          className="border-l-2 pl-4 mb-4 italic text-sm"
          style={{
            borderColor: "#4a7c3f",
            color: "#8a9aaa",
            fontFamily: "'Share Tech Mono', monospace",
          }}
        >
          How five turning points dismantled the CPU's iron grip on computing — and opened the galaxy to a new order of graphics, gaming, and AI.
        </div>

        <div className="space-y-3 text-sm mb-6" style={{ color: "#8a9aaa", fontFamily: "'Share Tech Mono', monospace" }}>
          <p>
            Before 1996, all rendering was the CPU's burden. Millions of polygons, one processor,
            infinite suffering. Then 3DFX appeared with the Voodoo chip — and the Rebellion began.
          </p>
          <p>
            What followed was an arms race measured in teraflops: GeForce 256 coined the term GPU,
            programmable shaders handed power to the artists, and CUDA handed it to the scientists.
          </p>
        </div>

        {activeSection >= 0 && (
          <div
            className="p-4 mb-6 border"
            style={{
              background: "rgba(8,20,8,0.6)",
              borderColor: "rgba(74,124,63,0.3)",
            }}
          >
            <p
              className="text-xs tracking-widest mb-1"
              style={{ color: "#c8a830", fontFamily: "'Share Tech Mono', monospace" }}
            >
              SECTION {String(activeSection + 1).padStart(2, "0")} DETAIL
            </p>
            <p
              className="text-sm font-bold mb-2"
              style={{ color: "#c8f0b0", fontFamily: "'Share Tech Mono', monospace" }}
            >
              {sectionContent[activeSection].title}
            </p>
            <p className="text-sm" style={{ color: "#8a9aaa", fontFamily: "'Share Tech Mono', monospace" }}>
              {sectionContent[activeSection].body}
            </p>
          </div>
        )}

        <p
          className="text-xs tracking-widest mb-4"
          style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}
        >
          MISSION LOG &mdash; FIVE TURNING POINTS
        </p>
        <div className="relative pl-6 space-y-5 mb-6">
          <div
            className="absolute left-2 top-0 bottom-0 w-px"
            style={{ background: "rgba(74,124,63,0.4)" }}
          />
          {timelineEvents.map((ev, i) => (
            <div key={i} className="relative">
              <div
                className="absolute -left-6 top-1 w-3 h-3 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: ev.active ? "#8dc47c" : "#2d4a20",
                  background: ev.active ? "#1a3a1a" : "#0e1318",
                }}
              >
                {ev.active && (
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#8dc47c" }} />
                )}
              </div>
              <p
                className="text-xs mb-0.5"
                style={{ color: "#5a7a5a", fontFamily: "'Share Tech Mono', monospace" }}
              >
                {ev.era}
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: "#c8f0b0", fontFamily: "'Orbitron', sans-serif" }}
              >
                {ev.title}
              </p>
              <p
                className="text-xs italic"
                style={{ color: "#6a7f6a", fontFamily: "'Share Tech Mono', monospace" }}
              >
                {ev.desc}
              </p>
            </div>
          ))}
        </div>

        <blockquote
          className="p-4 border"
          style={{
            borderColor: "#4a7c3f",
            background: "rgba(8,20,8,0.8)",
            fontFamily: "'Share Tech Mono', monospace",
          }}
        >
          <p className="text-sm italic mb-2" style={{ color: "#c8f0b0" }}>
            "The GPU did not just change graphics. It changed what a computer could think."
          </p>
          <footer className="text-xs" style={{ color: "#5a7a5a" }}>
            &mdash; GPU Wars Exhibit Thesis &middot; CSARCH2 Group 8 &middot; 2026
          </footer>
        </blockquote>
      </div>

      <SectorBriefings activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

function TimelineTab() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <p
          className="text-xs tracking-widest mb-4"
          style={{ color: "#c8a830", fontFamily: "'Share Tech Mono', monospace" }}
        >
          MISSION LOG &mdash; FULL CHRONICLE
        </p>
        <div className="relative pl-8 space-y-6">
          <div
            className="absolute left-3 top-2 bottom-2 w-px"
            style={{ background: "rgba(74,124,63,0.35)" }}
          />
          {fullTimeline.map((ev, i) => (
            <div
              key={i}
              className="relative cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <div
                className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all"
                style={{
                  borderColor: selected === i ? "#c8a830" : "#4a7c3f",
                  background: selected === i ? "#3a2a00" : "#0e1318",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: selected === i ? "#c8a830" : "#4a7c3f" }}
                />
              </div>
              <p
                className="text-xs mb-0.5"
                style={{ color: "#5a7a5a", fontFamily: "'Share Tech Mono', monospace" }}
              >
                {ev.era}
              </p>
              <p
                className="text-sm font-bold mb-0.5"
                style={{
                  color: selected === i ? "#c8f0b0" : "#8aaa8a",
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                {ev.title}
              </p>
              <p
                className="text-xs italic"
                style={{ color: "#5a7a5a", fontFamily: "'Share Tech Mono', monospace" }}
              >
                {ev.desc}
              </p>
              {selected === i && (
                <div
                  className="mt-3 p-3 border-l-2 text-sm"
                  style={{
                    borderColor: "#4a7c3f",
                    color: "#8a9aaa",
                    fontFamily: "'Share Tech Mono', monospace",
                    background: "rgba(8,20,8,0.5)",
                  }}
                >
                  {ev.detail}
                </div>
              )}
            </div>
          ))}
        </div>

        <blockquote
          className="mt-8 p-4 border"
          style={{
            borderColor: "#4a7c3f",
            background: "rgba(8,20,8,0.8)",
            fontFamily: "'Share Tech Mono', monospace",
          }}
        >
          <p className="text-sm italic mb-2" style={{ color: "#c8f0b0" }}>
            "The GPU did not just change graphics. It changed what a computer could think."
          </p>
          <footer className="text-xs" style={{ color: "#5a7a5a" }}>
            &mdash; GPU Wars Exhibit Thesis &middot; CSARCH2 Group 8 &middot; 2026
          </footer>
        </blockquote>
      </div>

      <aside className="w-72 shrink-0">
        <p
          className="text-xs tracking-widest mb-3 pb-2 border-b"
          style={{
            color: "#c8a830",
            fontFamily: "'Share Tech Mono', monospace",
            borderColor: "rgba(74,124,63,0.3)",
          }}
        >
          SELECTED ENTRY
        </p>
        <div
          className="p-4 border"
          style={{
            borderColor: "rgba(74,124,63,0.3)",
            background: "rgba(8,20,8,0.6)",
          }}
        >
          <p
            className="text-xs mb-1"
            style={{ color: "#c8a830", fontFamily: "'Share Tech Mono', monospace" }}
          >
            {fullTimeline[selected].era}
          </p>
          <p
            className="text-sm font-bold mb-3"
            style={{ color: "#c8f0b0", fontFamily: "'Orbitron', sans-serif" }}
          >
            {fullTimeline[selected].title}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "#8a9aaa", fontFamily: "'Share Tech Mono', monospace" }}>
            {fullTimeline[selected].detail}
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <p
            className="text-xs tracking-widest mb-2"
            style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}
          >
            INTEL TAGS
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs border"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  borderColor: "rgba(74,124,63,0.5)",
                  color: "#7aaa60",
                  background: "rgba(74,124,63,0.08)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

function ShaderLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ambient, setAmbient] = useState(0.3);
  const [diffuse, setDiffuse] = useState(0.7);
  const [specular, setSpecular] = useState(0.5);
  const [shininess, setShininess] = useState(32);
  const [lightX, setLightX] = useState(0.5);
  const [lightY, setLightY] = useState(0.3);
  const [colorR, setColorR] = useState(0.2);
  const [colorG, setColorG] = useState(0.7);
  const [colorB, setColorB] = useState(0.3);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) * 0.38;

    const render = () => {
      timeRef.current += 0.01;
      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = "#06090e";
      ctx.fillRect(0, 0, W, H);

      const imgData = ctx.createImageData(W, H);
      const data = imgData.data;

      const lx = lightX * 2 - 1;
      const ly = -(lightY * 2 - 1);
      const lz = 0.8;
      const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
      const Lx = lx / lLen, Ly = ly / lLen, Lz = lz / lLen;

      for (let py = 0; py < H; py++) {
        for (let px = 0; px < W; px++) {
          const dx = px - cx;
          const dy = py - cy;
          const d2 = dx * dx + dy * dy;
          if (d2 > R * R) continue;

          const z = Math.sqrt(R * R - d2) / R;
          const nx = dx / R, ny = dy / R, nz = z;

          const dot = Math.max(0, nx * Lx + ny * Ly + nz * Lz);

          const viewZ = 1;
          const rx = 2 * dot * nx - Lx;
          const ry = 2 * dot * ny - Ly;
          const rz = 2 * dot * nz - Lz;
          const spec = Math.pow(Math.max(0, rz / Math.sqrt(rx * rx + ry * ry + rz * rz)), shininess);

          const ao = ambient;
          const diff = diffuse * dot;
          const sp = specular * spec;

          const r = Math.min(255, Math.floor((ao * colorR + diff * colorR + sp) * 255));
          const g = Math.min(255, Math.floor((ao * colorG + diff * colorG * 0.9 + sp) * 255));
          const b = Math.min(255, Math.floor((ao * colorB + diff * colorB + sp) * 255));

          const idx = (py * W + px) * 4;
          data[idx] = r;
          data[idx + 1] = g;
          data[idx + 2] = b;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imgData, 0, 0);

      ctx.strokeStyle = "rgba(141,196,124,0.15)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI;
        ctx.beginPath();
        ctx.ellipse(cx, cy, R, R * Math.abs(Math.cos(angle)), 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      const lScreenX = cx + lx * R * 0.7;
      const lScreenY = cy - ly * R * 0.7;
      ctx.beginPath();
      ctx.arc(lScreenX, lScreenY, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#c8a830";
      ctx.fill();
      ctx.strokeStyle = "rgba(200,168,48,0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(lScreenX, lScreenY);
      ctx.lineTo(cx, cy);
      ctx.stroke();

      animRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animRef.current);
  }, [ambient, diffuse, specular, shininess, lightX, lightY, colorR, colorG, colorB]);

  const Slider = ({
    label,
    value,
    min,
    max,
    step,
    onChange,
  }: {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (v: number) => void;
  }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <label className="text-xs" style={{ color: "#7aaa60", fontFamily: "'Share Tech Mono', monospace" }}>
          {label}
        </label>
        <span className="text-xs" style={{ color: "#c8a830", fontFamily: "'Share Tech Mono', monospace" }}>
          {value.toFixed(2)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1 appearance-none cursor-pointer"
        style={{ accentColor: "#4a7c3f" }}
      />
    </div>
  );

  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <p className="text-xs tracking-widest mb-1" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
          INTERACTIVE LAB &mdash; THE HOLODECK
        </p>
        <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Orbitron', sans-serif", color: "#e0e8d0" }}>
          PHONG <span style={{ color: "#8dc47c" }}>SHADER</span> SIMULATOR
        </h2>
        <p className="text-sm mb-6" style={{ color: "#6a7f6a", fontFamily: "'Share Tech Mono', monospace" }}>
          Manipulate shader parameters in real time. This is the Phong reflection model — the mathematical breakthrough that made 3D surfaces look solid. Adjust ambient, diffuse, and specular terms to see how each stage of the rendering pipeline contributes to the final image.
        </p>
        <div
          className="flex items-center justify-center p-4 border mb-4"
          style={{ borderColor: "rgba(74,124,63,0.3)", background: "#06090e" }}
        >
          <canvas ref={canvasRef} width={320} height={320} className="rounded" />
        </div>
        <p className="text-xs text-center" style={{ color: "#3a5a3a", fontFamily: "'Share Tech Mono', monospace" }}>
          &gt; DRAG SLIDERS TO ADJUST SHADER PARAMETERS &lt;
        </p>
      </div>

      <div className="w-72 shrink-0">
        <p className="text-xs tracking-widest mb-4 pb-2 border-b" style={{ color: "#c8a830", fontFamily: "'Share Tech Mono', monospace", borderColor: "rgba(74,124,63,0.3)" }}>
          SHADER CONTROLS
        </p>
        <div
          className="p-4 border mb-4"
          style={{ borderColor: "rgba(74,124,63,0.3)", background: "rgba(8,20,8,0.6)" }}
        >
          <p className="text-xs tracking-widest mb-3" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
            LIGHTING MODEL
          </p>
          <Slider label="AMBIENT" value={ambient} min={0} max={1} step={0.01} onChange={setAmbient} />
          <Slider label="DIFFUSE" value={diffuse} min={0} max={1} step={0.01} onChange={setDiffuse} />
          <Slider label="SPECULAR" value={specular} min={0} max={1} step={0.01} onChange={setSpecular} />
          <Slider label="SHININESS" value={shininess} min={1} max={128} step={1} onChange={setShininess} />
        </div>
        <div
          className="p-4 border mb-4"
          style={{ borderColor: "rgba(74,124,63,0.3)", background: "rgba(8,20,8,0.6)" }}
        >
          <p className="text-xs tracking-widest mb-3" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
            LIGHT POSITION
          </p>
          <Slider label="LIGHT X" value={lightX} min={0} max={1} step={0.01} onChange={setLightX} />
          <Slider label="LIGHT Y" value={lightY} min={0} max={1} step={0.01} onChange={setLightY} />
        </div>
        <div
          className="p-4 border"
          style={{ borderColor: "rgba(74,124,63,0.3)", background: "rgba(8,20,8,0.6)" }}
        >
          <p className="text-xs tracking-widest mb-3" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
            SURFACE COLOR
          </p>
          <Slider label="RED" value={colorR} min={0} max={1} step={0.01} onChange={setColorR} />
          <Slider label="GREEN" value={colorG} min={0} max={1} step={0.01} onChange={setColorG} />
          <Slider label="BLUE" value={colorB} min={0} max={1} step={0.01} onChange={setColorB} />
          <div
            className="mt-2 h-8 border"
            style={{
              background: `rgb(${Math.floor(colorR * 200)},${Math.floor(colorG * 200)},${Math.floor(colorB * 200)})`,
              borderColor: "rgba(74,124,63,0.4)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ArchivesTab() {
  const archives = [
    {
      section: "SECTION 01",
      title: "BEFORE THE GPU",
      date: "Pre-1996",
      classification: "HISTORICAL",
      body: "The Empire of fixed-function pipelines ruled unchallenged. Every polygon, every light calculation, every texture lookup was executed by the CPU through software renderers. The silicon dictatorship of fixed pipelines meant that rendering was deterministic and slow. Artists had no control. Engineers had no flexibility. The dark age of triangles.",
    },
    {
      section: "SECTION 02",
      title: "3DFX VOODOO, 1996",
      date: "1996",
      classification: "DECLASSIFIED",
      body: "A disturbance in the pipeline. The Voodoo chip from 3Dfx Interactive introduced dedicated hardware rasterization, texture mapping, and z-buffering. Paired with Glide API, it delivered visual fidelity the CPU alone could never achieve. The rebellion against software rendering ignited across game studios worldwide.",
    },
    {
      section: "SECTION 03",
      title: "GEFORCE 256, 1999",
      date: "1999",
      classification: "DECLASSIFIED",
      body: 'NVIDIA named its weapon: the Graphics Processing Unit. The GeForce 256 implemented hardware Transform & Lighting (T&L), offloading matrix math and lighting calculations from the CPU permanently. The term "GPU" was coined, and the architecture of computing would never revert to its former state.',
    },
    {
      section: "SECTION 04",
      title: "SHADER REVOLUTION",
      date: "2001–2006",
      classification: "DECLASSIFIED",
      body: "The Force became programmable. Vertex shaders and pixel shaders replaced fixed-function stages with general-purpose GPU programs. DirectX 8, 9, and OpenGL extensions opened the render pipeline to developers. Normal mapping, HDR, shadow volumes — techniques requiring programmable silicon — became the new standard.",
    },
    {
      section: "SECTION 05",
      title: "CUDA & GPGPU",
      date: "2007–Present",
      classification: "ACTIVE INTEL",
      body: "NVIDIA's CUDA platform broke the GPU free from graphics entirely. General Purpose GPU computing (GPGPU) enabled scientific simulation, machine learning, and cryptography on graphics silicon. What began as a triangle pipeline became the most important parallel computing platform in human history.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <p className="text-xs tracking-widest mb-4" style={{ color: "#c8a830", fontFamily: "'Share Tech Mono', monospace" }}>
          REBEL ALLIANCE ARCHIVES &mdash; DECLASSIFIED INTEL
        </p>
        <div className="space-y-2">
          {archives.map((a, i) => (
            <div
              key={i}
              className="border"
              style={{ borderColor: open === i ? "rgba(74,124,63,0.6)" : "rgba(74,124,63,0.2)", background: "rgba(8,20,8,0.4)" }}
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
                    {a.section}
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: open === i ? "#c8f0b0" : "#8aaa8a", fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {a.title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs px-2 py-0.5 border"
                    style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      color: a.classification === "ACTIVE INTEL" ? "#c8a830" : "#4a7c3f",
                      borderColor: a.classification === "ACTIVE INTEL" ? "rgba(200,168,48,0.4)" : "rgba(74,124,63,0.4)",
                    }}
                  >
                    {a.classification}
                  </span>
                  <span style={{ color: "#4a7c3f" }}>{open === i ? "▲" : "▼"}</span>
                </div>
              </button>
              {open === i && (
                <div className="px-4 pb-4 border-t" style={{ borderColor: "rgba(74,124,63,0.2)" }}>
                  <p className="text-xs mb-3 mt-3" style={{ color: "#c8a830", fontFamily: "'Share Tech Mono', monospace" }}>
                    &mdash; {a.date}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#8a9aaa", fontFamily: "'Share Tech Mono', monospace" }}>
                    {a.body}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <aside className="w-72 shrink-0">
        <SectorBriefings activeSection={-1} setActiveSection={() => {}} />
      </aside>
    </div>
  );
}

function CrewTab() {
  const members = [
    {
      name: "Bendol, Trisha Mae R.",
      role: "Lead Researcher",
      callsign: "PHANTOM",
      intel: "Historical timeline research and GPU architecture documentation. Primary author of the CPU Empire section.",
    },
    {
      name: "Canato, Karl Kristoffer R.",
      role: "Systems Analyst",
      callsign: "RENEGADE",
      intel: "3DFX and early GPU hardware analysis. Voodoo chipset deep-dive and performance benchmarking documentation.",
    },
    {
      name: "Descalzo, Alberto Miguel T.",
      role: "Technical Engineer",
      callsign: "CIRCUIT",
      intel: "Shader architecture research and interactive lab implementation. Phong lighting model implementation.",
    },
    {
      name: "Gregorio, John Marc M.",
      role: "UX Commander",
      callsign: "FALCON",
      intel: "Interface design, navigation architecture, and exhibit visual language. Star Wars thematic direction.",
    },
    {
      name: "Martin, Kurt Nehemiah Z.",
      role: "CUDA Specialist",
      callsign: "VOLTAGE",
      intel: "GPGPU and AI era documentation. CUDA platform analysis and AI supercomputing era research.",
    },
  ];

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest mb-2" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
          REBEL ALLIANCE &mdash; FIELD OPERATIVES
        </p>
        <h2 className="text-3xl font-black" style={{ fontFamily: "'Orbitron', sans-serif", color: "#e0e8d0" }}>
          CREW &mdash; <span style={{ color: "#8dc47c" }}>GROUP 8</span>
        </h2>
        <p className="text-xs mt-2" style={{ color: "#5a7a5a", fontFamily: "'Share Tech Mono', monospace" }}>
          CSARCH2 &mdash; 3RD TERM 2025–2026
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m, i) => (
          <div
            key={i}
            className="p-5 border transition-colors hover:border-green-600"
            style={{
              borderColor: "rgba(74,124,63,0.3)",
              background: "rgba(8,20,8,0.6)",
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className="w-10 h-10 flex items-center justify-center text-lg font-black border-2"
                style={{
                  borderColor: "#4a7c3f",
                  color: "#8dc47c",
                  fontFamily: "'Orbitron', sans-serif",
                  background: "#0e1f0e",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <span
                className="text-xs px-2 py-0.5 border"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  color: "#c8a830",
                  borderColor: "rgba(200,168,48,0.35)",
                  background: "rgba(200,168,48,0.05)",
                }}
              >
                {m.callsign}
              </span>
            </div>
            <p className="text-sm font-bold mb-1" style={{ color: "#c8f0b0", fontFamily: "'Share Tech Mono', monospace" }}>
              {m.name}
            </p>
            <p className="text-xs mb-3" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
              {m.role}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "#6a7f6a", fontFamily: "'Share Tech Mono', monospace" }}>
              {m.intel}
            </p>
          </div>
        ))}
        <div
          className="p-5 border flex flex-col items-center justify-center text-center"
          style={{ borderColor: "rgba(74,124,63,0.2)", background: "rgba(8,20,8,0.3)" }}
        >
          <p className="text-xs mb-1" style={{ color: "#3a5a3a", fontFamily: "'Share Tech Mono', monospace" }}>
            UNDER THE COMMAND OF
          </p>
          <p className="text-sm font-bold" style={{ color: "#8dc47c", fontFamily: "'Orbitron', sans-serif" }}>
            CSARCH2
          </p>
          <p className="text-xs mt-2" style={{ color: "#3a5a3a", fontFamily: "'Share Tech Mono', monospace" }}>
            Computer Architecture 2<br />3rd Term, AY 2025–2026
          </p>
        </div>
      </div>
    </div>
  );
}

function DesignSystem() {
  const palette = [
    { name: "Void", hex: "#080c10", label: "#080C10" },
    { name: "Shadow", hex: "#1a2a1a", label: "#1A2A1A" },
    { name: "Forest", hex: "#2d4a20", label: "#2D4A20" },
    { name: "Rebel", hex: "#4a7c3f", label: "#4A7C3F" },
    { name: "Gold", hex: "#c8a830", label: "#C8A830" },
    { name: "Star", hex: "#c2cad6", label: "#C2CAD6" },
  ];

  return (
    <div
      className="border-t mt-8 pt-8"
      style={{ borderColor: "rgba(74,124,63,0.2)" }}
    >
      <div className="flex gap-16 flex-wrap">
        <div>
          <p className="text-xs tracking-widest mb-3" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
            COLOR PALETTE
          </p>
          <div className="flex gap-3 mb-4">
            {palette.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-1">
                <div
                  className="w-8 h-8 border"
                  style={{ background: c.hex, borderColor: "rgba(74,124,63,0.3)" }}
                />
                <span className="text-xs" style={{ color: "#3a5a3a", fontFamily: "'Share Tech Mono', monospace" }}>
                  {c.name}
                </span>
                <span className="text-xs" style={{ color: "#2a3a2a", fontFamily: "'Share Tech Mono', monospace", fontSize: 9 }}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs tracking-widest mb-2" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
            BUTTONS
          </p>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 text-xs tracking-widest font-bold transition-opacity hover:opacity-80"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                background: "#4a7c3f",
                color: "#c8f0b0",
              }}
            >
              ENTER EXHIBIT
            </button>
            <button
              className="px-4 py-2 text-xs tracking-widest border transition-colors hover:border-green-500"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                borderColor: "#4a7c3f",
                color: "#7aaa60",
              }}
            >
              READ ARCHIVES
            </button>
          </div>
        </div>

        <div className="flex gap-12">
          <div>
            <p className="text-xs tracking-widest mb-3" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
              TYPOGRAPHY
            </p>
            <div className="mb-4">
              <p className="text-xs mb-1" style={{ color: "#3a5a3a", fontFamily: "'Share Tech Mono', monospace" }}>
                DISPLAY &mdash; ORBITRON
              </p>
              <p className="text-2xl font-black" style={{ fontFamily: "'Orbitron', sans-serif", color: "#c8a830" }}>
                GPU WARS
              </p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: "#3a5a3a", fontFamily: "'Share Tech Mono', monospace" }}>
                BODY &mdash; SHARE TECH MONO
              </p>
              <p className="text-sm" style={{ fontFamily: "'Share Tech Mono', monospace", color: "#8a9aaa" }}>
                Transmitting from the graphic frontier.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest mb-3" style={{ color: "#5a8a5a", fontFamily: "'Share Tech Mono', monospace" }}>
              &nbsp;
            </p>
            <div className="mb-4">
              <p className="text-xs mb-1" style={{ color: "#3a5a3a", fontFamily: "'Share Tech Mono', monospace" }}>
                HEADING &mdash; ORBITRON
              </p>
              <p className="text-xl font-bold" style={{ fontFamily: "'Orbitron', sans-serif", color: "#e0e8d0" }}>
                THE TIMELINE
              </p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: "#3a5a3a", fontFamily: "'Share Tech Mono', monospace" }}>
                LABEL &mdash; SPACED CAPS
              </p>
              <p className="text-xs tracking-widest" style={{ fontFamily: "'Share Tech Mono', monospace", color: "#5a8a5a" }}>
                SECTOR BRIEFING
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="flex justify-between items-center px-4 py-2 border-t text-xs"
      style={{
        borderColor: "rgba(74,124,63,0.2)",
        background: "#050810",
        color: "#3a5a3a",
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      <span>CSARCH2 &mdash; GROUP 8</span>
      <span style={{ color: "#5a7a5a" }}>GPU WARS: FIVE TURNING POINTS</span>
      <span>
        {time.toLocaleTimeString("en-US", { hour12: false })}
        &nbsp;&nbsp;3RD TERM 2025–2026
      </span>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("prologue");
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#080c10", fontFamily: "'Share Tech Mono', monospace" }}
    >
      <TopBar />
      <Hero />
      <NavTabs active={activeTab} setActive={setActiveTab} />

      <main className="flex-1 px-6 py-6 max-w-screen-xl mx-auto w-full">
        {activeTab === "prologue" && (
          <PrologueTab activeSection={activeSection} setActiveSection={setActiveSection} />
        )}
        {activeTab === "timeline" && <TimelineTab />}
        {activeTab === "lab" && <ShaderLab />}
        {activeTab === "archives" && <ArchivesTab />}
        {activeTab === "crew" && <CrewTab />}

        <DesignSystem />
      </main>

      <Footer />
    </div>
  );
}
