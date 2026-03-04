"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RadioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Radio Buttons</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Single selection components with optional labels and descriptions.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Radio Button with Label & Description */}
        <Card>
          <CardHeader>
            <CardTitle>Radio Button with Label & Description</CardTitle>
            <CardDescription>Radio buttons with icon, label, and description text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup defaultValue="selected">
              <div className="grid grid-cols-2 gap-8">
                {/* Unselected */}
                <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
                  <RadioGroupItem value="unselected" id="unselected" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">Radio Button</p>
                    <p className="text-xs text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                {/* Selected */}
                <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
                  <RadioGroupItem value="selected" id="selected" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">Radio Button</p>
                    <p className="text-xs text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Simple Radio Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Simple Radio Buttons</CardTitle>
            <CardDescription>Basic radio button states</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="selected">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unselected" id="simple-unselected" />
                  <label htmlFor="simple-unselected" className="text-sm">Radio</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="selected" id="simple-selected" />
                  <label htmlFor="simple-selected" className="text-sm">Radio</label>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Disabled States */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled States</CardTitle>
            <CardDescription>Radio buttons in disabled state</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="enabled">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="disabled-unchecked" id="disabled-unchecked" disabled />
                  <label htmlFor="disabled-unchecked" className="text-sm text-muted-foreground">
                    Disabled
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="enabled" id="enabled" />
                  <label htmlFor="enabled" className="text-sm">
                    Enabled
                  </label>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
