"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AlertPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-10 pt-10 pb-8 border-b border-border/40 bg-[#FAFAF8]">
        <h1 className="text-[1.75rem] font-bold tracking-tight">Alert</h1>
        <p className="text-[13px] text-muted-foreground mt-1.5 max-w-lg leading-relaxed">
          Alerts are used to notify users of important information or changes.
        </p>
      </div>

      <div className="px-10 py-8 space-y-8">
        {/* Default Alert */}
        <Card>
          <CardHeader>
            <CardTitle>Default Alert</CardTitle>
            <CardDescription>Basic alert with title and description</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertTitle>Alert Title</AlertTitle>
              <AlertDescription>
                This is the alert description. It provides more context about the alert.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Variants</CardTitle>
            <CardDescription>Different alert styles for different scenarios</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert. Use it to provide helpful context.
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your action was completed successfully!
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Please be careful with this action. It may have consequences.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again or contact support.
              </AlertDescription>
            </Alert>

            <Alert variant="info">
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>
                Here is some additional context that might be helpful.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert without Title */}
        <Card>
          <CardHeader>
            <CardTitle>Alert without Title</CardTitle>
            <CardDescription>Alerts can also be used with just a description</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertDescription>
                This is a simple alert with only a description message.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
