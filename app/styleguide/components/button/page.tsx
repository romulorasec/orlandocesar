"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const darkButtonClassName =
  "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80"

export default function ButtonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Button</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Buttons with pill-shaped design and configurable states.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Filled A - Primary */}
        <Card>
          <CardHeader>
            <CardTitle>Filled A (Primary)</CardTitle>
            <CardDescription>Blue primary colored filled buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Big</p>
                <div className="flex gap-3">
                  <Button size="lg">← Button →</Button>
                  <Button size="lg" aria-pressed>← Button →</Button>
                  <Button size="lg" disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Medium</p>
                <div className="flex gap-3">
                  <Button>← Button →</Button>
                  <Button aria-pressed>← Button →</Button>
                  <Button disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Small/Chip</p>
                <div className="flex gap-3">
                  <Button size="sm">← Button →</Button>
                  <Button size="sm" aria-pressed>← Button →</Button>
                  <Button size="sm" disabled>← Button →</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filled B - Secondary */}
        <Card>
          <CardHeader>
            <CardTitle>Filled B (Secondary)</CardTitle>
            <CardDescription>Lime green secondary colored buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Big</p>
                <div className="flex gap-3">
                  <Button variant="secondary" size="lg">← Button →</Button>
                  <Button variant="secondary" size="lg" aria-pressed>← Button →</Button>
                  <Button variant="secondary" size="lg" disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Medium</p>
                <div className="flex gap-3">
                  <Button variant="secondary">← Button →</Button>
                  <Button variant="secondary" aria-pressed>← Button →</Button>
                  <Button variant="secondary" disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Small/Chip</p>
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm">← Button →</Button>
                  <Button variant="secondary" size="sm" aria-pressed>← Button →</Button>
                  <Button variant="secondary" size="sm" disabled>← Button →</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filled C - Dark */}
        <Card>
          <CardHeader>
            <CardTitle>Filled C (Dark)</CardTitle>
            <CardDescription>Dark/black filled buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Big</p>
                <div className="flex gap-3">
                  <Button variant="ghost" size="lg" className={darkButtonClassName}>← Button →</Button>
                  <Button variant="ghost" size="lg" className={darkButtonClassName} aria-pressed>← Button →</Button>
                  <Button variant="ghost" size="lg" className={darkButtonClassName} disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Medium</p>
                <div className="flex gap-3">
                  <Button variant="ghost" className={darkButtonClassName}>← Button →</Button>
                  <Button variant="ghost" className={darkButtonClassName} aria-pressed>← Button →</Button>
                  <Button variant="ghost" className={darkButtonClassName} disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Small/Chip</p>
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className={darkButtonClassName}>← Button →</Button>
                  <Button variant="ghost" size="sm" className={darkButtonClassName} aria-pressed>← Button →</Button>
                  <Button variant="ghost" size="sm" className={darkButtonClassName} disabled>← Button →</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outlined */}
        <Card>
          <CardHeader>
            <CardTitle>Outlined</CardTitle>
            <CardDescription>Outlined button style with borders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Big</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="lg">← Button →</Button>
                  <Button variant="outline" size="lg" aria-pressed>← Button →</Button>
                  <Button variant="outline" size="lg" disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Medium</p>
                <div className="flex gap-3">
                  <Button variant="outline">← Button →</Button>
                  <Button variant="outline" aria-pressed>← Button →</Button>
                  <Button variant="outline" disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Small/Chip</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">← Button →</Button>
                  <Button variant="outline" size="sm" aria-pressed>← Button →</Button>
                  <Button variant="outline" size="sm" disabled>← Button →</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Text Button */}
        <Card>
          <CardHeader>
            <CardTitle>Text Button</CardTitle>
            <CardDescription>Text-only button style</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Big</p>
                <div className="flex gap-3">
                  <Button variant="link" size="lg">← Button →</Button>
                  <Button variant="link" size="lg" aria-pressed>← Button →</Button>
                  <Button variant="link" size="lg" disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Medium</p>
                <div className="flex gap-3">
                  <Button variant="link">← Button →</Button>
                  <Button variant="link" aria-pressed>← Button →</Button>
                  <Button variant="link" disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Small/Chip</p>
                <div className="flex gap-3">
                  <Button variant="link" size="sm">← Button →</Button>
                  <Button variant="link" size="sm" aria-pressed>← Button →</Button>
                  <Button variant="link" size="sm" disabled>← Button →</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Neutral */}
        <Card>
          <CardHeader>
            <CardTitle>Neutral</CardTitle>
            <CardDescription>Light gray neutral filled buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Big</p>
                <div className="flex gap-3">
                  <Button variant="neutral" size="lg">← Button →</Button>
                  <Button variant="neutral" size="lg" aria-pressed>← Button →</Button>
                  <Button variant="neutral" size="lg" disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Medium</p>
                <div className="flex gap-3">
                  <Button variant="neutral">← Button →</Button>
                  <Button variant="neutral" aria-pressed>← Button →</Button>
                  <Button variant="neutral" disabled>← Button →</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Small/Chip</p>
                <div className="flex gap-3">
                  <Button variant="neutral" size="sm">← Button →</Button>
                  <Button variant="neutral" size="sm" aria-pressed>← Button →</Button>
                  <Button variant="neutral" size="sm" disabled>← Button →</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
