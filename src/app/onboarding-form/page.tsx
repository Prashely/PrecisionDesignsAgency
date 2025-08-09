import React from "react";

export default function OnboardingFormPage() {
  return (
    <div className="flex justify-center py-10 px-4">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfM1pzzm_PxO4ro7tcw29lntdOJaBxfGw05X-UWn52HtgU6Lg/viewform?embedded=true"
        width="100%"
        height="2000"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  );
}
