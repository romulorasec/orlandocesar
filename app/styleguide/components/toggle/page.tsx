"use client"

import { Toggle } from "@/components/ui/toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TogglePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Toggles</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Switch components for binary on/off states with optional labels and descriptions.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Toggle with Label & Description */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle with Label & Description</CardTitle>
            <CardDescription>Toggle switches with label and description text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
              {/* Off */}
              <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                <div className="pt-1">
                  <Toggle id="toggle-off" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Toggle checkbox</p>
                  <p className="text-xs text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                  </p>
                </div>
              </div>

              {/* On */}
              <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                <div className="pt-1">
                  <Toggle id="toggle-on" defaultChecked />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Toggle checkbox</p>
                  <p className="text-xs text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Simple Toggles */}
        <Card>
          <CardHeader>
            <CardTitle>Simple Toggles</CardTitle>
            <CardDescription>Basic toggle states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Toggle id="simple-off" />
                <label htmlFor="simple-off" className="text-sm">Option one</label>
              </div>
              <div className="flex items-center gap-3">
                <Toggle id="simple-on" defaultChecked />
                <label htmlFor="simple-on" className="text-sm">Option one</label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disabled States */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled States</CardTitle>
            <CardDescription>Toggles in disabled state</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Toggle id="disabled-off" disabled />
                <label htmlFor="disabled-off" className="text-sm text-muted-foreground">
                  Disabled off
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Toggle id="disabled-on" disabled defaultChecked />
                <label htmlFor="disabled-on" className="text-sm text-muted-foreground">
                  Disabled on
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
