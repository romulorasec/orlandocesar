"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckboxPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Checkboxes</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Selection components with optional labels and descriptions.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Checkbox with Label & Description */}
        <Card>
          <CardHeader>
            <CardTitle>Checkbox with Label & Description</CardTitle>
            <CardDescription>Checkboxes with icon, label, and description text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
              {/* Unchecked */}
              <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
                <Checkbox id="unchecked" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Checkbox</p>
                  <p className="text-xs text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Checked */}
              <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
                <Checkbox id="checked" defaultChecked />
                <div className="flex-1">
                  <p className="font-medium text-sm">Checkbox</p>
                  <p className="text-xs text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Simple Checkboxes */}
        <Card>
          <CardHeader>
            <CardTitle>Simple Checkboxes</CardTitle>
            <CardDescription>Basic checkbox states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Checkbox id="unchecked-simple" />
                <label htmlFor="unchecked-simple" className="text-sm">Checkbox</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="indeterminate-simple" checked="indeterminate" />
                <label htmlFor="indeterminate-simple" className="text-sm">Checkbox</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="checked-simple" defaultChecked />
                <label htmlFor="checked-simple" className="text-sm">Checkbox</label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disabled States */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled States</CardTitle>
            <CardDescription>Checkboxes in disabled state</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Checkbox id="disabled-unchecked" disabled />
                <label htmlFor="disabled-unchecked" className="text-sm text-muted-foreground">
                  Disabled unchecked
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="disabled-checked" disabled defaultChecked />
                <label htmlFor="disabled-checked" className="text-sm text-muted-foreground">
                  Disabled checked
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
