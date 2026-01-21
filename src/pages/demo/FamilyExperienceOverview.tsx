import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FamilyExperienceOverview() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Family Experience Overview</h1>
      <p className="mt-2 text-muted-foreground">
        Simple visual walkthrough of the family experience—from recording to milestone selection to delivery concept.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="text-lg">1) Record your messages</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Share your heart in simple guided recording sessions.
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-lg">2) Choose recipients</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Select the loved ones who will receive each message.
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-lg">3) Select milestone deliveries</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Pick the life moments when your message will arrive.
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-lg">4) Verified activation process</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Secure verification ensures proper timing and release.
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader><CardTitle className="text-lg">5) Milestone delivery</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Your loved ones receive your video at the perfect moment.
          </CardContent>
        </Card>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        This isn't just storage. It's a secure milestone delivery system with verified activation and controlled release, ensuring your messages reach your loved ones exactly when they need them most.
      </p>
    </div>
  );
}
