"use client"

import { Mail, ArrowRight, Check, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { FormField } from "@/components/ui/form-field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InputPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Forms & Inputs</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Form fields with icons, helper text, and state indicators.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Filled Input Style */}
        <Card>
          <CardHeader>
            <CardTitle>Filled Input Style</CardTitle>
            <CardDescription>Filled background input fields with various states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
              {/* Empty */}
              <FormField
                label="Input Empty"
                helperText="Helper Text"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                state="empty"
              >
                <Input variant="filled" placeholder="Enter text..." />
              </FormField>

              {/* Filled */}
              <FormField
                label="Input Filled"
                helperText="Helper Text"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                state="filled"
              >
                <Input variant="filled" defaultValue="Input value" />
              </FormField>

              {/* Active */}
              <FormField
                label="Input Active"
                helperText="Helper Text"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                state="active"
              >
                <Input variant="filled" defaultValue="Input value" autoFocus />
              </FormField>

              {/* Error */}
              <FormField
                label="Input Error"
                helperText="Error message here"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                state="error"
                error
              >
                <Input variant="filled" defaultValue="Input value" aria-invalid />
              </FormField>

              {/* Validated */}
              <FormField
                label="Input Validated"
                helperText="Helper Text"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<Check className="h-4 w-4" />}
                state="validated"
              >
                <Input variant="filled" defaultValue="Input value" />
              </FormField>
            </div>
          </CardContent>
        </Card>

        {/* Lined Input Style */}
        <Card>
          <CardHeader>
            <CardTitle>Lined Input Style</CardTitle>
            <CardDescription>Border-bottom input fields (underline style)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
              {/* Empty */}
              <FormField
                label="Input Empty"
                helperText="Helper Text"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                state="empty"
              >
                <Input variant="lined" placeholder="Enter text..." />
              </FormField>

              {/* Filled */}
              <FormField
                label="Input Filled"
                helperText="Helper Text"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                state="filled"
              >
                <Input variant="lined" defaultValue="Input value" />
              </FormField>

              {/* Active */}
              <FormField
                label="Input Active"
                helperText="Helper Text"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                state="active"
              >
                <Input variant="lined" defaultValue="Input value" autoFocus />
              </FormField>

              {/* Error */}
              <FormField
                label="Input Error"
                helperText="Error message here"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                state="error"
                error
              >
                <Input variant="lined" defaultValue="Input value" aria-invalid />
              </FormField>

              {/* Validated */}
              <FormField
                label="Input Validated"
                helperText="Helper Text"
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<Check className="h-4 w-4" />}
                state="validated"
              >
                <Input variant="lined" defaultValue="Input value" />
              </FormField>
            </div>
          </CardContent>
        </Card>

        {/* Select/Dropdown */}
        <Card>
          <CardHeader>
            <CardTitle>Select/Dropdown</CardTitle>
            <CardDescription>Dropdown selection component</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
              <FormField label="Dropdown Item" helperText="Helper Text">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="item1">Dropdown Item</SelectItem>
                    <SelectItem value="item2">Dropdown Item / Selected</SelectItem>
                    <SelectItem value="item3">Dropdown Item</SelectItem>
                    <SelectItem value="item4">Dropdown Item / Pressed</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>

              <FormField label="Dropdown Item" helperText="Helper Text">
                <Select defaultValue="item2">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="item1">Dropdown Item</SelectItem>
                    <SelectItem value="item2">Dropdown Item / Selected</SelectItem>
                    <SelectItem value="item3">Dropdown Item</SelectItem>
                    <SelectItem value="item4">Dropdown Item / Pressed</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
            </div>
          </CardContent>
        </Card>

        {/* Textarea */}
        <Card>
          <CardHeader>
            <CardTitle>Textarea</CardTitle>
            <CardDescription>Multi-line text input</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              label="Multiline text field"
              helperText="Helper Text"
              state="filled"
            >
              <textarea
                placeholder="Pst, got something to say? This is your stage, your moment! So, what are you waiting for? Start typing and let the adventure begin!"
                className="w-full px-3 py-2 rounded-md border border-input bg-muted text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-50 min-h-32 resize-none dark:bg-input/30"
              />
            </FormField>
          </CardContent>
        </Card>

        {/* Input Types */}
        <Card>
          <CardHeader>
            <CardTitle>Input Types</CardTitle>
            <CardDescription>Different input type attributes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField label="Text Input" helperText="Enter text">
              <Input variant="filled" type="text" placeholder="Text input..." />
            </FormField>

            <FormField label="Email Input" helperText="Enter email">
              <Input variant="filled" type="email" placeholder="Email input..." />
            </FormField>

            <FormField label="Password Input" helperText="Enter password">
              <Input variant="filled" type="password" placeholder="Password input..." />
            </FormField>

            <FormField label="Number Input" helperText="Enter number">
              <Input variant="filled" type="number" placeholder="Number input..." />
            </FormField>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
