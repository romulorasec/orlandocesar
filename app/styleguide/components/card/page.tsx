"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Card</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Cards are containers for content grouping and organization.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Basic Card */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>A simple card with header</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the content area of the card. You can put any content here.</p>
          </CardContent>
        </Card>

        {/* Card with Multiple Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Card 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This is a simple card example that demonstrates the card component.
              </p>
              <Button size="sm">Action</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Card 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Cards can be arranged in a grid layout for better organization.
              </p>
              <Button size="sm" variant="outline">
                Secondary
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Card Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Card Grid</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">Item {i}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Content for card {i}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
