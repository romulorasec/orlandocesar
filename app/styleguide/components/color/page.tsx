"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ColorInfo {
  name: string
  value: string
  description?: string
}

const colors = {
  primary: [
    { name: "Primary", value: "#3B588A", description: "Main brand color - Blue" },
    { name: "Primary Foreground", value: "#ffffff", description: "Text/content on primary background" },
  ],
  secondary: [
    { name: "Secondary", value: "#B1E158", description: "Secondary brand color - Green" },
    { name: "Secondary Foreground", value: "#1a1a1a", description: "Text/content on secondary background" },
  ],
  accent: [
    { name: "Accent", value: "#537BA1", description: "Accent color - Light Blue" },
    { name: "Accent Foreground", value: "#ffffff", description: "Text/content on accent background" },
  ],
  semantic: [
    { name: "Destructive", value: "#ef4444", description: "Error/destructive actions - Red" },
    { name: "Destructive Foreground", value: "#ffffff", description: "Text on destructive background" },
  ],
  backgrounds: [
    { name: "Background", value: "#ffffff", description: "Page background - White" },
    { name: "Foreground", value: "#1a1a1a", description: "Primary text color - Dark Gray" },
    { name: "Card", value: "#ffffff", description: "Card background - White" },
    { name: "Card Foreground", value: "#1a1a1a", description: "Card text color" },
  ],
  muted: [
    { name: "Muted", value: "#F5F5F4", description: "Muted background - Light Gray" },
    { name: "Muted Foreground", value: "#7B7E7A", description: "Muted text color" },
  ],
  border: [
    { name: "Border", value: "#E3E3DF", description: "Border color - Light Gray" },
    { name: "Input", value: "#F0F1EF", description: "Input background - Very Light Gray" },
  ],
  focus: [
    { name: "Ring", value: "#3B588A", description: "Focus ring color - Primary Blue" },
  ],
  grayscale: [
    { name: "White", value: "#FFFFFF", description: "Level 0 - White" },
    { name: "Gray 0.5", value: "#FAFAFA", description: "Level 0.5 - Very Light" },
    { name: "Gray 1", value: "#F5F5F4", description: "Level 1 - Very Light Gray" },
    { name: "Gray 1.5", value: "#F0F1EF", description: "Level 1.5 - Light Gray" },
    { name: "Gray 2", value: "#EBEDE9", description: "Level 2 - Light Gray" },
    { name: "Gray 3", value: "#E3E3DF", description: "Level 3 - Light Border" },
    { name: "Gray 4", value: "#D7DAD5", description: "Level 4 - Medium-Light Gray" },
    { name: "Gray 5", value: "#CDDCCA", description: "Level 5 - Medium Gray" },
    { name: "Gray 6", value: "#AAABA2", description: "Level 6 - Medium Gray" },
    { name: "Gray 7", value: "#7B7E7A", description: "Level 7 - Medium-Dark Gray" },
    { name: "Gray 8", value: "#535651", description: "Level 8 - Dark Gray" },
    { name: "Gray 8.5", value: "#3E403D", description: "Level 8.5 - Darker Gray" },
    { name: "Gray 9", value: "#2A2B29", description: "Level 9 - Very Dark Gray" },
    { name: "Gray 9.5", value: "#151715", description: "Level 9.5 - Near Black" },
    { name: "Black", value: "#000000", description: "Level 10 - Black" },
  ],
}

const darkModeColors = {
  backgrounds: [
    { name: "Background (Dark)", value: "#151715", description: "Page background - Very Dark" },
    { name: "Foreground (Dark)", value: "#FAFAFA", description: "Primary text - Light Gray" },
    { name: "Card (Dark)", value: "#2A2B29", description: "Card background - Dark" },
  ],
  primary: [
    { name: "Primary (Dark)", value: "#537BA1", description: "Primary - Lighter Blue for Dark" },
  ],
  secondary: [
    { name: "Secondary (Dark)", value: "#D4E886", description: "Secondary - Light Green" },
  ],
  accent: [
    { name: "Accent (Dark)", value: "#6B8DB8", description: "Accent - Medium Blue" },
  ],
}

function ColorSwatch({ color }: { color: ColorInfo }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-20 h-20 rounded-lg border border-border shadow-sm"
        style={{ backgroundColor: color.value }}
        title={color.value}
      />
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">{color.name}</p>
        <p className="text-xs text-muted-foreground font-mono">{color.value}</p>
        {color.description && (
          <p className="text-xs text-muted-foreground mt-1">{color.description}</p>
        )}
      </div>
    </div>
  )
}

export default function ColorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Colors</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Complete color palette for the Orlando Cesar design system.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Brand Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Brand Colors</CardTitle>
            <CardDescription>Primary, secondary, and accent colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Primary — Blue</h3>
                <div className="space-y-3">
                  {colors.primary.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold text-foreground mb-4">Secondary — Lime Green</h3>
                <div className="space-y-3">
                  {colors.secondary.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold text-foreground mb-4">Accent — Light Blue</h3>
                <div className="space-y-3">
                  {colors.accent.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Semantic Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Semantic Colors</CardTitle>
            <CardDescription>Colors with specific meanings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Destructive - Errors & Warnings</h3>
                <div className="space-y-3">
                  {colors.semantic.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backgrounds & Text */}
        <Card>
          <CardHeader>
            <CardTitle>Backgrounds & Text</CardTitle>
            <CardDescription>Colors for surfaces and typography</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Surface Colors</h3>
                <div className="space-y-3">
                  {colors.backgrounds.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold text-foreground mb-4">Muted Colors</h3>
                <div className="space-y-3">
                  {colors.muted.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold text-foreground mb-4">Borders & Inputs</h3>
                <div className="space-y-3">
                  {colors.border.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold text-foreground mb-4">Focus States</h3>
                <div className="space-y-3">
                  {colors.focus.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grayscale */}
        <Card>
          <CardHeader>
            <CardTitle>Grayscale Palette</CardTitle>
            <CardDescription>Neutral colors from white to black</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {colors.grayscale.map((color) => (
                <ColorSwatch key={color.name} color={color} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dark Mode Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Dark Mode Colors</CardTitle>
            <CardDescription>Color adjustments for dark theme</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Dark Mode Backgrounds</h3>
                <div className="space-y-3">
                  {darkModeColors.backgrounds.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold text-foreground mb-4">Dark Mode Brand Colors</h3>
                <div className="space-y-3">
                  {darkModeColors.primary.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                  {darkModeColors.secondary.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                  {darkModeColors.accent.map((color) => (
                    <ColorSwatch key={color.name} color={color} />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Usage Guide */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
            <CardDescription>How to use colors effectively</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">Primary Color (#3B588A)</p>
                <p className="text-sm text-muted-foreground mt-1">Use for main CTAs, key interactive elements, and brand-focused UI. Represents trust, stability, and professionalism.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">Secondary Color (#B1E158)</p>
                <p className="text-sm text-muted-foreground mt-1">Use for secondary actions, highlights, and positive feedback. Represents growth, vitality, and success.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">Accent Color (#537BA1)</p>
                <p className="text-sm text-muted-foreground mt-1">Use for accents, hover states, and supporting elements. A lighter blue for complementary emphasis.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-sm font-semibold text-foreground">Destructive Color (#ef4444)</p>
                <p className="text-sm text-muted-foreground mt-1">Use only for errors, warnings, and destructive actions. Reserve for critical user attention.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Grayscale & Neutral</p>
                <p className="text-sm text-muted-foreground mt-1">Use for borders, dividers, disabled states, and body text. Creates visual hierarchy and structure.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
