"use client"

const colors = [
  { name: "Primary",     hex: "#3B588A", description: "Blue — main brand" },
  { name: "Secondary",   hex: "#B1E158", description: "Lime — vibrant accent" },
  { name: "Accent",      hex: "#537BA1", description: "Light blue — support" },
  { name: "Deep",        hex: "#192940", description: "Blue 120 — dark surfaces" },
  { name: "Destructive", hex: "#ef4444", description: "Red — errors" },
  { name: "Muted",       hex: "#F5F5F4", description: "Gray — subtle fills" },
  { name: "Border",      hex: "#E3E3DF", description: "Gray — dividers" },
  { name: "Foreground",  hex: "#1a1a1a", description: "Dark — body text" },
  { name: "Background",  hex: "#ffffff", description: "White — surfaces" },
]

const typography = [
  { name: "Display 1",  size: "56px", weight: 700, lh: 1.2  },
  { name: "Display 2",  size: "48px", weight: 700, lh: 1.2  },
  { name: "Heading 1",  size: "40px", weight: 700, lh: 1.2  },
  { name: "Heading 2",  size: "36px", weight: 700, lh: 1.2  },
  { name: "Heading 3",  size: "32px", weight: 700, lh: 1.2  },
  { name: "Heading 4",  size: "24px", weight: 600, lh: 1.4  },
  { name: "Heading 5",  size: "20px", weight: 600, lh: 1.4  },
  { name: "Heading 6",  size: "18px", weight: 600, lh: 1.4  },
  { name: "Body Large", size: "18px", weight: 400, lh: 1.5  },
  { name: "Body",       size: "16px", weight: 400, lh: 1.5  },
  { name: "Body Small", size: "14px", weight: 400, lh: 1.5  },
  { name: "Caption",    size: "12px", weight: 400, lh: 1.5  },
  { name: "Label",      size: "10px", weight: 400, lh: 1.5  },
]

const radiusValues = [
  { name: "None",   value: "0px"    },
  { name: "Small",  value: "8px"    },
  { name: "Medium", value: "10px"   },
  { name: "Base",   value: "12px"   },
  { name: "Large",  value: "16px"   },
  { name: "XL",     value: "20px"   },
  { name: "Full",   value: "9999px" },
]

const shadows = [
  { name: "XX-Small", value: "0 1px 2px 0 rgba(0,0,0,0.04)"           },
  { name: "X-Small",  value: "0 1px 3px 0 rgba(0,0,0,0.08)"           },
  { name: "Small",    value: "0 4px 6px -1px rgba(0,0,0,0.10)"        },
  { name: "Medium",   value: "0 10px 15px -3px rgba(0,0,0,0.12)"      },
  { name: "Large",    value: "0 20px 25px -5px rgba(0,0,0,0.15)"      },
  { name: "X-Large",  value: "0 25px 50px -12px rgba(0,0,0,0.18)"     },
  { name: "XX-Large", value: "0 35px 60px -15px rgba(0,0,0,0.20)"     },
]

function SectionLabel({ index, title, description }: {
  index: string
  title: string
  description?: string
}) {
  return (
    <div className="flex items-start gap-5 mb-8">
      <span className="font-mono text-[9.5px] font-semibold text-muted-foreground/40 uppercase tracking-widest pt-[3px] shrink-0">
        {index}
      </span>
      <div>
        <h2 className="text-[1.05rem] font-bold text-foreground tracking-tight">{title}</h2>
        {description && (
          <p className="text-[12.5px] text-muted-foreground mt-1 max-w-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Page Header ─────────────────────────────────────── */}
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-secondary mb-3">
          Orlando Cesar · Design Tokens
        </p>
        <h1 className="text-[2rem] font-bold tracking-tight leading-tight">Style Guide</h1>
        <p className="text-[13px] text-muted-foreground mt-2 max-w-md leading-relaxed">
          Visual language of the brand — type scales, color palette, shape, elevation, and spatial rhythm.
        </p>
      </div>

      <div className="px-10 py-12 space-y-16 max-w-4xl">

        {/* ── 01 Typography ───────────────────────────────────── */}
        <section>
          <SectionLabel
            index="01"
            title="Typography"
            description="DM Sans — humanist sans-serif optimized for screens. 11 levels from 10px label to 56px display."
          />
          <div className="rounded-xl border border-border/50 overflow-hidden divide-y divide-border/40 bg-card">
            {typography.map((type) => (
              <div
                key={type.name}
                className="flex items-baseline gap-6 px-5 py-4 hover:bg-muted/20 transition-colors"
              >
                <div className="w-32 shrink-0 border-r border-border/30 pr-4">
                  <p className="text-[10.5px] font-semibold text-foreground">{type.name}</p>
                  <p className="text-[9px] text-muted-foreground font-mono mt-0.5">
                    {type.size} · {type.weight}
                  </p>
                </div>
                <div
                  className="flex-1 text-foreground overflow-hidden"
                  style={{
                    fontSize: type.size,
                    fontWeight: type.weight,
                    lineHeight: type.lh,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 Color Palette ────────────────────────────────── */}
        <section>
          <SectionLabel
            index="02"
            title="Color Palette"
            description="Blue-forward with a vibrant lime accent — trust, clarity, and brand distinction."
          />
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
            {colors.map((color) => (
              <div key={color.name} className="group flex flex-col gap-1.5">
                <div
                  className="w-full h-14 rounded-lg border border-border/25 transition-transform duration-200 group-hover:scale-105 shadow-xsmall cursor-default"
                  style={{ backgroundColor: color.hex }}
                  title={color.description}
                />
                <div>
                  <p className="text-[9.5px] font-semibold text-foreground leading-tight">{color.name}</p>
                  <p className="text-[8.5px] text-muted-foreground font-mono">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03 Border Radius ────────────────────────────────── */}
        <section>
          <SectionLabel
            index="03"
            title="Border Radius"
            description="From sharp to pill — a consistent shape vocabulary for all surfaces."
          />
          <div className="flex items-end gap-7 flex-wrap">
            {radiusValues.map((r) => (
              <div key={r.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 border-2 border-primary/25 bg-primary/10"
                  style={{ borderRadius: r.value }}
                />
                <p className="text-[10px] font-semibold text-foreground">{r.name}</p>
                <p className="text-[8.5px] text-muted-foreground font-mono">{r.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04 Elevation ────────────────────────────────────── */}
        <section>
          <SectionLabel
            index="04"
            title="Elevation & Shadows"
            description="Seven depth levels — from barely-there to dramatic floating panels."
          />
          <div className="relative bg-gradient-to-br from-muted/20 via-background to-muted/10 rounded-2xl p-8 border border-border/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {shadows.map((s, index) => (
                <div 
                  key={s.name} 
                  className="group relative flex flex-col gap-4"
                >
                  {/* Depth Indicator */}
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`w-1 h-3 rounded-full transition-all duration-300 ${
                            i <= index 
                              ? 'bg-primary/80 group-hover:bg-primary' 
                              : 'bg-border/40 group-hover:bg-border/60'
                          }`}
                          style={{
                            height: `${8 + i * 2}px`
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-[9px] font-mono font-semibold text-primary/70 uppercase tracking-wider">
                      Level {index + 1}
                    </span>
                  </div>

                  {/* Shadow Card */}
                  <div className="relative flex-1 min-h-[120px] flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-background via-card to-background rounded-xl border border-border/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                      style={{ boxShadow: s.value }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-secondary/[0.02] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Center Dot */}
                    <div className="relative z-10 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary/50 transition-all duration-300 group-hover:scale-150" />
                  </div>

                  {/* Label */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold text-foreground tracking-tight">
                      {s.name}
                    </p>
                    <div className="bg-muted/50 rounded-md px-2.5 py-1.5 border border-border/30">
                      <p className="text-[8.5px] text-muted-foreground/80 font-mono leading-tight break-all">
                        {s.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,88,138,0.03),transparent_50%)] rounded-2xl pointer-events-none" />
          </div>
        </section>

        {/* ── 05 Spacing ──────────────────────────────────────── */}
        <section>
          <SectionLabel
            index="05"
            title="Spacing Scale"
            description="4px base unit — every gap, margin, and padding follows this rhythm."
          />
          <div className="space-y-2">
            {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80].map((size) => (
              <div key={size} className="flex items-center gap-4">
                <p className="w-8 text-right text-[9.5px] font-mono text-muted-foreground/55 shrink-0">
                  {size}
                </p>
                <div
                  className="bg-primary/20 rounded-sm shrink-0"
                  style={{ width: `${Math.min(size * 2.5, 320)}px`, height: "6px" }}
                />
                <p className="text-[8.5px] text-muted-foreground/35 font-mono">{size}px</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
