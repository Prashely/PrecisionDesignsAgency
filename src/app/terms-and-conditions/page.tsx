export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-accent">Updated:</span> 01 May
          2025
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          1. Payment Policy
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            No work will commence without the client's{" "}
            <span className="text-accent font-medium">
              Proof of Payment (POP)
            </span>
            .
          </li>
          <li>
            All invoices must be paid in full before services begin, unless the
            invoice is over{" "}
            <span className="text-accent font-medium">R1000</span>. Then a{" "}
            <span className="text-accent font-medium">50%</span> deposit is
            required to start.
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          2. Service Delivery
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Services are delivered on a{" "}
            <span className="text-accent font-medium">
              First-Come, First-Served (FCFS)
            </span>{" "}
            basis.
          </li>
          <li>
            Standard turnaround time is{" "}
            <span className="text-accent font-medium">
              2 to 14 business days
            </span>
            , depending on how quickly all information is received.
          </li>
          <li>
            <span className="text-accent font-medium">Golden Clients</span>{" "}
            receive same-day or next-day project initiation.
          </li>
          <li>Client delays (e.g., incomplete info) may pause timelines.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          3. Rush Services
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Same-day delivery requests incur a{" "}
            <span className="text-accent font-medium">15% rush fee</span>.
          </li>
          <li>
            <span className="text-accent font-medium">Golden Clients</span> are
            exempt from this fee.
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          4. Communication Policy
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-accent font-medium">Golden Clients</span> and{" "}
            <span className="text-accent font-medium">Website Clients</span>{" "}
            receive direct access to Creative Director{" "}
            <span className="font-semibold">Prashely</span>.
          </li>
          <li>
            All other communications are managed by the{" "}
            <span className="text-accent font-medium">Sales Team</span>.
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          5. Revisions & Changes
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Standard packages include limited revisions based on your package.
          </li>
          <li>
            Extra revisions beyond the package will have{" "}
            <span className="text-accent font-medium">additional charges</span>.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          6. Cancellation & Refunds
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            All payments are{" "}
            <span className="text-accent font-medium">non-refundable</span> once
            work starts.
          </li>
          <li>
            If canceled before work starts, a{" "}
            <span className="text-accent font-medium">15% admin fee</span> is
            deducted from the refund.
          </li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          7. Ownership and Usage
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Final work becomes the client’s property upon{" "}
            <span className="text-accent font-medium">full payment</span>.
          </li>
          <li>
            Precision Designa may use completed work for{" "}
            <span className="text-accent font-medium">
              portfolio or marketing
            </span>{" "}
            purposes unless agreed otherwise.
          </li>
        </ul>
      </section>

      {/* Section 8 */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">
          8. Agreement
        </h2>
        <p>
          By making payment, the client acknowledges and{" "}
          <span className="text-accent font-medium">agrees</span> to these Terms
          and Conditions.
        </p>
      </section>
    </div>
  );
}
