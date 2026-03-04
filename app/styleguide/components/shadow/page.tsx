"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const shadowLevels = [
  { name: "xxsmall", variable: "--shadow-xxsmall", value: "0 1px 2px 0 rgba(0, 0, 0, 0.04)", use: "Subtle borders, hover states" },
  { name: "xsmall", variable: "--shadow-xsmall", value: "0 1px 3px 0 rgba(0, 0, 0, 0.08)", use: "Inputs, small cards" },
  { name: "small", variable: "--shadow-small", value: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", use: "Standard cards" },
  { name: "medium", variable: "--shadow-medium", value: "0 10px 15px -3px rgba(0, 0, 0, 0.12)", use: "Modals, elevated cards" },
  { name: "large", variable: "--shadow-large", value: "0 20px 25px -5px rgba(0, 0, 0, 0.15)", use: "Floating panels" },
  { name: "xlarge", variable: "--shadow-xlarge", value: "0 25px 50px -12px rgba(0, 0, 0, 0.18)", use: "Important overlays" },
  { name: "xxlarge", variable: "--shadow-xxlarge", value: "0 35px 60px -15px rgba(0, 0, 0, 0.20)", use: "Primary modals" },
]

const shadowClasses: Record<string, string> = {
  "xxsmall": "shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]",
  "xsmall": "shadow-[0_1px_3px_0_rgba(0,0,0,0.08)]",
  "small": "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]",
  "medium": "shadow-[0_10px_15px_-3px_rgba(0,0,0,0.12)]",
  "large": "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.15)]",
  "xlarge": "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)]",
  "xxlarge": "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.20)]",
}

export default function ShadowPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Shadows</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Shadow system for elevation and depth with 7 progressive levels.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Shadow Levels Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Shadow Levels</CardTitle>
            <CardDescription>Apply shadow or blur effects at different elevation levels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-8">
              {shadowLevels.map((shadow) => (
                <div key={shadow.name} className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{shadow.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{shadow.use}</p>
                      <p className="text-xs text-muted-foreground mt-2 font-mono">{shadow.variable}</p>
                    </div>
                  </div>
                  <div className={`h-24 rounded-lg bg-card ${shadowClasses[shadow.name]}`} />
                  <p className="text-xs text-muted-foreground font-mono break-all">{shadow.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Shadow in Context */}
        <Card>
          <CardHeader>
            <CardTitle>Shadows in Context</CardTitle>
            <CardDescription>How shadows appear on cards with interactive elements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shadowLevels.map((shadow) => (
                <div
                  key={shadow.name}
                  className={`p-6 rounded-xl bg-card ${shadowClasses[shadow.name]} transition-transform hover:scale-105`}
                >
                  <p className="text-sm font-semibold text-foreground">{shadow.name}</p>
                  <p className="text-xs text-muted-foreground mt-2">{shadow.use}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage Guide */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Guide</CardTitle>
            <CardDescription>When to use each shadow level</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">xxsmall</p>
                <p className="text-sm text-muted-foreground mt-1">Use for subtle elevation on borders, hover states, and micro-interactions. Best for elements that should feel barely lifted.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">xsmall</p>
                <p className="text-sm text-muted-foreground mt-1">Use for inputs, buttons, and small interactive cards. Provides minimal but noticeable elevation.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">small</p>
                <p className="text-sm text-muted-foreground mt-1">Use for standard cards and content containers. The default shadow for most UI elements.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">medium</p>
                <p className="text-sm text-muted-foreground mt-1">Use for modals, dropdowns, and elevated card sections. Creates clear separation from content below.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">large</p>
                <p className="text-sm text-muted-foreground mt-1">Use for floating panels, side sheets, and prominent overlays. Strong visual hierarchy.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">xlarge</p>
                <p className="text-sm text-muted-foreground mt-1">Use for important overlays and notification panels. Highly visible and commanding attention.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">xxlarge</p>
                <p className="text-sm text-muted-foreground mt-1">Use for primary modals and full-screen overlays. Maximum elevation for top-level UI elements.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
