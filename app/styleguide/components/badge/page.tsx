"use client"

import { useState } from "react"
import { Package, Zap, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BadgePage() {
  const [closedChips, setClosedChips] = useState<string[]>([])

  const toggleChip = (id: string) => {
    setClosedChips((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const packageIcon = <Package className="h-3 w-3" />
  const zapIcon = <Zap className="h-3 w-3" />
  const chevronIcon = <ChevronDown className="h-3 w-3" />

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Badge</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Compact label components for status, categories, and metadata.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Primary Chips */}
        <Card>
          <CardHeader>
            <CardTitle>Primary Chips</CardTitle>
            <CardDescription>Default filled chips with primary color</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Default</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Label</Badge>
                {!closedChips.includes("p1") && <Badge onClose={() => toggleChip("p1")}>Label</Badge>}
                <Badge icon={packageIcon}>Label</Badge>
                {!closedChips.includes("p2") && (
                  <Badge icon={packageIcon} onClose={() => toggleChip("p2")}>Label</Badge>
                )}
                <Badge>Label {chevronIcon}</Badge>
                <Badge icon={zapIcon}>Label {chevronIcon}</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Hover</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="hover:bg-primary/90">Label</Badge>
                <Badge className="hover:bg-primary/90" onClose={() => {}}>Label</Badge>
                <Badge icon={packageIcon} className="hover:bg-primary/90">Label</Badge>
                <Badge icon={packageIcon} className="hover:bg-primary/90" onClose={() => {}}>Label</Badge>
                <Badge className="hover:bg-primary/90">Label {chevronIcon}</Badge>
                <Badge icon={zapIcon} className="hover:bg-primary/90">Label {chevronIcon}</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Disabled</p>
              <div className="flex flex-wrap gap-2">
                <Badge disabled>Label</Badge>
                <Badge disabled>Label</Badge>
                <Badge icon={packageIcon} disabled>Label</Badge>
                <Badge icon={packageIcon} disabled>Label</Badge>
                <Badge disabled>Label {chevronIcon}</Badge>
                <Badge icon={zapIcon} disabled>Label {chevronIcon}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Secondary Chips */}
        <Card>
          <CardHeader>
            <CardTitle>Secondary Chips</CardTitle>
            <CardDescription>Secondary color chips</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Default</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Label</Badge>
                {!closedChips.includes("s1") && (
                  <Badge variant="secondary" onClose={() => toggleChip("s1")}>Label</Badge>
                )}
                <Badge variant="secondary" icon={packageIcon}>Label</Badge>
                {!closedChips.includes("s2") && (
                  <Badge variant="secondary" icon={packageIcon} onClose={() => toggleChip("s2")}>Label</Badge>
                )}
                <Badge variant="secondary">Label {chevronIcon}</Badge>
                <Badge variant="secondary" icon={zapIcon}>Label {chevronIcon}</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Hover</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="hover:bg-secondary/90">Label</Badge>
                <Badge variant="secondary" className="hover:bg-secondary/90" onClose={() => {}}>Label</Badge>
                <Badge variant="secondary" icon={packageIcon} className="hover:bg-secondary/90">Label</Badge>
                <Badge variant="secondary" icon={packageIcon} className="hover:bg-secondary/90" onClose={() => {}}>Label</Badge>
                <Badge variant="secondary" className="hover:bg-secondary/90">Label {chevronIcon}</Badge>
                <Badge variant="secondary" icon={zapIcon} className="hover:bg-secondary/90">Label {chevronIcon}</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Disabled</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" disabled>Label</Badge>
                <Badge variant="secondary" disabled>Label</Badge>
                <Badge variant="secondary" icon={packageIcon} disabled>Label</Badge>
                <Badge variant="secondary" icon={packageIcon} disabled>Label</Badge>
                <Badge variant="secondary" disabled>Label {chevronIcon}</Badge>
                <Badge variant="secondary" icon={zapIcon} disabled>Label {chevronIcon}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dark Chips */}
        <Card>
          <CardHeader>
            <CardTitle>Dark Chips</CardTitle>
            <CardDescription>Dark background chips</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Default</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="dark">Label</Badge>
                {!closedChips.includes("d1") && <Badge variant="dark" onClose={() => toggleChip("d1")}>Label</Badge>}
                <Badge variant="dark" icon={packageIcon}>Label</Badge>
                {!closedChips.includes("d2") && (
                  <Badge variant="dark" icon={packageIcon} onClose={() => toggleChip("d2")}>Label</Badge>
                )}
                <Badge variant="dark">Label {chevronIcon}</Badge>
                <Badge variant="dark" icon={zapIcon}>Label {chevronIcon}</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Hover</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="dark" className="hover:bg-foreground/90">Label</Badge>
                <Badge variant="dark" className="hover:bg-foreground/90" onClose={() => {}}>Label</Badge>
                <Badge variant="dark" icon={packageIcon} className="hover:bg-foreground/90">Label</Badge>
                <Badge variant="dark" icon={packageIcon} className="hover:bg-foreground/90" onClose={() => {}}>Label</Badge>
                <Badge variant="dark" className="hover:bg-foreground/90">Label {chevronIcon}</Badge>
                <Badge variant="dark" icon={zapIcon} className="hover:bg-foreground/90">Label {chevronIcon}</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Disabled</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="dark" disabled>Label</Badge>
                <Badge variant="dark" disabled>Label</Badge>
                <Badge variant="dark" icon={packageIcon} disabled>Label</Badge>
                <Badge variant="dark" icon={packageIcon} disabled>Label</Badge>
                <Badge variant="dark" disabled>Label {chevronIcon}</Badge>
                <Badge variant="dark" icon={zapIcon} disabled>Label {chevronIcon}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outlined Chips */}
        <Card>
          <CardHeader>
            <CardTitle>Outlined Chips</CardTitle>
            <CardDescription>Outlined/border style chips</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Default</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Label</Badge>
                {!closedChips.includes("o1") && <Badge variant="outline" onClose={() => toggleChip("o1")}>Label</Badge>}
                <Badge variant="outline" icon={packageIcon}>Label</Badge>
                {!closedChips.includes("o2") && (
                  <Badge variant="outline" icon={packageIcon} onClose={() => toggleChip("o2")}>Label</Badge>
                )}
                <Badge variant="outline">Label {chevronIcon}</Badge>
                <Badge variant="outline" icon={zapIcon}>Label {chevronIcon}</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Hover</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="hover:bg-muted/50">Label</Badge>
                <Badge variant="outline" className="hover:bg-muted/50" onClose={() => {}}>Label</Badge>
                <Badge variant="outline" icon={packageIcon} className="hover:bg-muted/50">Label</Badge>
                <Badge variant="outline" icon={packageIcon} className="hover:bg-muted/50" onClose={() => {}}>Label</Badge>
                <Badge variant="outline" className="hover:bg-muted/50">Label {chevronIcon}</Badge>
                <Badge variant="outline" icon={zapIcon} className="hover:bg-muted/50">Label {chevronIcon}</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Disabled</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" disabled>Label</Badge>
                <Badge variant="outline" disabled>Label</Badge>
                <Badge variant="outline" icon={packageIcon} disabled>Label</Badge>
                <Badge variant="outline" icon={packageIcon} disabled>Label</Badge>
                <Badge variant="outline" disabled>Label {chevronIcon}</Badge>
                <Badge variant="outline" icon={zapIcon} disabled>Label {chevronIcon}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
