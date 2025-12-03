import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ContactRedirect = () => {
  const [searchParams] = useSearchParams();
  const method = searchParams.get("method");

  useEffect(() => {
    // Track the contact method
    const trackContactMethod = async () => {
      try {
        // Send analytics event to your backend or analytics service
        const payload = {
          method: method,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          url: window.location.href,
        };

        // Log to console (you can replace this with actual API call)
        console.log("Contact method tracked:", payload);

        // Send to analytics backend (example)
        // await fetch('/api/track-contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(payload)
        // });

        // Send to Google Analytics if available
        if ((window as any).gtag) {
          (window as any).gtag("event", "contact_method_selected", {
            contact_method: method,
          });
        }
      } catch (error) {
        console.error("Error tracking contact method:", error);
      }
    };

    trackContactMethod();

    // Redirect based on method
    const redirectDelay = setTimeout(() => {
      if (method === "whatsapp") {
        window.location.href =
          "https://wa.me/971503634385?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20custom%20design%20consultation%20with%20Aziz%20Khan%20Curtains.";
      } else if (method === "call") {
        window.location.href = "tel:+971503634385";
      } else {
        // Fallback to home if no method specified
        window.location.href = "/";
      }
    }, 500); // Small delay to ensure tracking completes

    return () => clearTimeout(redirectDelay);
  }, [method]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-champagne-50 to-sage-50">
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-champagne-600"></div>
        </div>
        <h2 className="text-2xl font-cormorant font-semibold text-gray-900 mb-2">
          Connecting you...
        </h2>
        <p className="text-gray-600">
          {method === "whatsapp"
            ? "Opening WhatsApp..."
            : method === "call"
              ? "Initiating call..."
              : "Redirecting..."}
        </p>
      </div>
    </div>
  );
};

export default ContactRedirect;
