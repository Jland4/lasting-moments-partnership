import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ArrangementRoomExplainer() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Arrangement Room Explainer</h1>
      <p className="mt-2 text-muted-foreground">
        One-page resource designed for use during arrangement conferences. Helps counselors explain Lasting Moments clearly in under two minutes using plain, compassionate language.
      </p>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-xl">What Lasting Moments Is</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-6">
          <p>
            <span className="font-medium">Your voice, delivered at life's biggest milestones.</span> Lasting Moments helps families record heartfelt video messages and schedule them for future delivery after death at milestone moments — graduation, wedding, birthday, anniversary, first child, and more.
          </p>

          <p className="text-muted-foreground">
            This isn't just storage. It's a secure milestone delivery system with verified activation and controlled release, ensuring your messages reach your loved ones exactly when they need them most.
          </p>

          <p className="font-medium">5 simple steps:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li><span className="font-medium">Record your messages:</span> Share your heart in simple guided recording sessions.</li>
            <li><span className="font-medium">Choose recipients:</span> Select the loved ones who will receive each message.</li>
            <li><span className="font-medium">Select milestone deliveries:</span> Pick the life moments when your message will arrive.</li>
            <li><span className="font-medium">Verified activation process:</span> Secure verification ensures proper timing and release.</li>
            <li><span className="font-medium">Milestone delivery:</span> Your loved ones receive your video at the perfect moment.</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
