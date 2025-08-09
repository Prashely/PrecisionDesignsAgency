export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold text-green-600">✅ Thank You!</h1>
      <p className="mt-4 max-w-md">
        We’ve received your form. We’ll contact you on WhatsApp within 24 hours
        to collect your images, logo, and any other info we need.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        Back to Home
      </a>
    </div>
  );
}
