import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PreneedCounselorScript() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Preneed Counselor Script</h1>
      <p className="mt-2 text-muted-foreground">
        Professional, conversational script for preneed discussions. Frames Lasting Moments as a legacy enhancement that fits naturally with trust-based conversations.
      </p>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-xl">Suggested Script</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-6">
          <p className="font-medium">Opening</p>
          <p>
            "One option some families appreciate is Lasting Moments. It allows you to record heartfelt video messages and schedule them to be delivered to the people you love at future milestones—graduation, wedding day, birthdays, anniversaries, first child, and more."
          </p>

          <p className="font-medium">Clarifier</p>
          <p>
            "This isn't just storage. It's a secure milestone delivery system with verified activation and controlled release—so messages arrive exactly when they're meant to."
          </p>

          <p className="font-medium">5 simple steps</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li><span className="font-medium">Record your messages:</span> Share your heart in simple guided recording sessions.</li>
            <li><span className="font-medium">Choose recipients:</span> Select the loved ones who will receive each message.</li>
            <li><span className="font-medium">Select milestone deliveries:</span> Pick the life moments when your message will arrive.</li>
            <li><span className="font-medium">Verified activation process:</span> Secure verification ensures proper timing and release.</li>
            <li><span className="font-medium">Milestone delivery:</span> Your loved ones receive your video at the perfect moment.</li>
          </ol>

          <p className="font-medium">Close</p>
          <p>
            "It's completely optional, but for many families it becomes one of the most meaningful things they leave behind. If you'd like, I can share a one-page overview."
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
