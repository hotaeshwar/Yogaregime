"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function BookingFormClient() {
  const searchParams = useSearchParams();
  const selectedServiceParam = searchParams.get("service") || "";

  return (
    <ContactForm
      defaultService={selectedServiceParam}
      showServiceSelect={true}
      showDateAndTime={true}
      submitButtonText="Book Now"
      formTitle="Session Details"
      formSubtitle="Please fill out the form below. All inquiries are answered within 24 hours."
    />
  );
}
