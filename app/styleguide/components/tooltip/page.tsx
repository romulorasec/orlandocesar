"use client"

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"

export default function TooltipPage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
          <h1 className="text-[1.75rem] font-bold tracking-tight">Tooltips</h1>
          <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
            Informational overlays with contextual help and additional information.
          </p>
        </div>

        <div className="px-10 py-8 space-y-8">
          {/* Text Tooltips */}
          <Card>
            <CardHeader>
              <CardTitle>Text Tooltips</CardTitle>
              <CardDescription>Simple text-based tooltips with info icon trigger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-8 flex-wrap">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center justify-center">
                      <Info className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Click to save your changes to the database.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center justify-center">
                      <Info className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>This feature is available for premium users only.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center justify-center">
                      <Info className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Double-click to edit the field inline. Press Enter to confirm.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center justify-center">
                      <Info className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Keyboard shortcut: Cmd+S to save or Cmd+Z to undo.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>

          {/* Card Tooltips */}
          <Card>
            <CardHeader>
              <CardTitle>Card Tooltips</CardTitle>
              <CardDescription>Rich card-based tooltips with image/gradient header, title, description and call-to-action</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center justify-center">
                      <Info className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="w-48 p-0 bg-transparent border-0 shadow-md">
                    <div className="bg-secondary text-secondary-foreground rounded-md overflow-hidden">
                      <div className="h-24 bg-gradient-to-r from-destructive to-primary"></div>
                      <div className="p-3">
                        <p className="font-semibold text-sm">Getting Started</p>
                        <p className="text-xs mt-1 text-secondary-foreground/90">
                          Learn how to set up your workspace and configure your first integration.
                        </p>
                        <button className="mt-2 text-xs text-primary-foreground/70 hover:text-primary-foreground font-medium">
                          View guide
                        </button>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center justify-center">
                      <Info className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="w-48 p-0 bg-transparent border-0 shadow-md">
                    <div className="bg-secondary text-secondary-foreground rounded-md overflow-hidden">
                      <div className="h-24 bg-gradient-to-r from-accent to-cyan-500"></div>
                      <div className="p-3">
                        <p className="font-semibold text-sm">Advanced Features</p>
                        <p className="text-xs mt-1 text-secondary-foreground/90">
                          Unlock powerful capabilities with our premium plan. Perfect for teams.
                        </p>
                        <button className="mt-2 text-xs text-primary-foreground/70 hover:text-primary-foreground font-medium">
                          Explore features
                        </button>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center justify-center">
                      <Info className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="w-48 p-0 bg-transparent border-0 shadow-md">
                    <div className="bg-secondary text-secondary-foreground rounded-md overflow-hidden">
                      <div className="h-24 bg-gradient-to-r from-primary to-destructive"></div>
                      <div className="p-3">
                        <p className="font-semibold text-sm">API Documentation</p>
                        <p className="text-xs mt-1 text-secondary-foreground/90">
                          Complete reference for our REST and GraphQL APIs with code examples.
                        </p>
                        <button className="mt-2 text-xs text-primary-foreground/70 hover:text-primary-foreground font-medium">
                          Read docs
                        </button>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center justify-center">
                      <Info className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="w-48 p-0 bg-transparent border-0 shadow-md">
                    <div className="bg-secondary text-secondary-foreground rounded-md overflow-hidden">
                      <div className="h-24 bg-gradient-to-r from-cyan-500 to-accent"></div>
                      <div className="p-3">
                        <p className="font-semibold text-sm">Best Practices</p>
                        <p className="text-xs mt-1 text-secondary-foreground/90">
                          Follow our recommended patterns to build secure and performant applications.
                        </p>
                        <button className="mt-2 text-xs text-primary-foreground/70 hover:text-primary-foreground font-medium">
                          Learn more
                        </button>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  )
}
