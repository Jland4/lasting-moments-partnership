import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function PartnershipEconomics() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Partnership Economics</h1>
      <p className="mt-2 text-muted-foreground">
        Overview of how funeral homes generate revenue, where it fits in current offerings, and why it delivers high perceived family value.
      </p>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-xl">{submitted ? "Request Received" : "Request Access"}</CardTitle>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="space-y-2 text-sm leading-6">
              <p>Thank you. Your request has been received. We'll follow up with partnership economics and next steps.</p>
              <p className="text-muted-foreground">
                If you prefer faster scheduling, use the Schedule a Demo option on the main site.
              </p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="funeralHome">Funeral Home Name</Label>
                <Input id="funeralHome" required />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role/Title</Label>
                  <Input id="role" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">City/State</Label>
                <Input id="location" />
              </div>

              <Button type="submit" className="w-full">Request Access</Button>

              <p className="text-xs text-muted-foreground">
                This form currently confirms submission on-screen. Connect a form provider (Netlify Forms, Formspree, HubSpot) to receive requests.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
