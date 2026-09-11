"use client";

import { useState, useEffect, useRef } from "react";
import { Send, AlertCircle, RefreshCw } from "lucide-react";
import SuccessModal from "./SuccessModal";

export default function ContactForm({
  defaultService = "",
  showServiceSelect = false,
  showDateAndTime = false,
  submitButtonText = "Send Message",
  formTitle = "",
  formSubtitle = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "Hatha Yoga & Alignment",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "error" | "success"
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const progressIntervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setProgress(0);
    setErrorMessage("");

    // Start animated progress toward 90%
    let currentProgress = 0;
    progressIntervalRef.current = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 4;
      if (currentProgress >= 90) {
        currentProgress = 90;
        clearInterval(progressIntervalRef.current);
      }
      setProgress(currentProgress);
    }, 120);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/yogawithharpreet@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Inquiry from Yoga Regime: ${formData.name}`,
            _template: "table",
            _captcha: "false",
            fullName: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            ...(showServiceSelect && { selectedService: formData.service }),
            ...(showDateAndTime && {
              preferredDate: formData.preferredDate,
              preferredTime: formData.preferredTime,
            }),
            message: formData.message,
          }),
        }
      );

      clearInterval(progressIntervalRef.current);

      if (response.ok) {
        // Complete the progress to 100%
        setProgress(100);
        setTimeout(() => {
          setStatus("success");
          setShowSuccessModal(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: defaultService || "Hatha Yoga & Alignment",
            preferredDate: "",
            preferredTime: "",
            message: "",
          });
          setProgress(0);
          setStatus("idle");
        }, 350);
      } else {
        throw new Error("Unable to submit. Please try again.");
      }
    } catch (err) {
      clearInterval(progressIntervalRef.current);
      setStatus("error");
      setErrorMessage(
        err.message || "Something went wrong sending your message. Please retry."
      );
    }
  };

  return (
    <div className="w-full">
      {formTitle && (
        <div className="mb-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0E2229] font-medium">
            {formTitle}
          </h3>
          {formSubtitle && (
            <p className="text-sm text-[#526063] mt-1">{formSubtitle}</p>
          )}
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50/80 border border-red-200 rounded-2xl flex items-start gap-3 text-sm text-red-800 animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-medium">Submission Failed</p>
            <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="text-xs underline font-medium hover:text-red-950"
          >
            Dismiss
          </button>
        </div>
      )}

      <form
        action="https://formsubmit.co/yogawithharpreet@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-5"
      >
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_subject"
          value={`New Inquiry from Yoga Regime: ${formData.name || "Website Visitor"}`}
        />

        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-wider font-semibold text-[#1D2628] mb-1.5"
          >
            Full Name <span className="text-[#A97A37]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Aman Sharma"
            disabled={status === "sending"}
            className="w-full px-4 py-3.5 bg-white border border-[#DFD9CC] rounded-2xl text-[#1D2628] placeholder-[#7A898C]/60 text-sm focus:bg-white focus:border-[#0E2229] transition-all disabled:opacity-60"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider font-semibold text-[#1D2628] mb-1.5"
            >
              Email <span className="text-[#A97A37]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@domain.com"
              disabled={status === "sending"}
              className="w-full px-4 py-3.5 bg-white border border-[#DFD9CC] rounded-2xl text-[#1D2628] placeholder-[#7A898C]/60 text-sm focus:bg-white focus:border-[#0E2229] transition-all disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-wider font-semibold text-[#1D2628] mb-1.5"
            >
              Phone Number <span className="text-[#A97A37]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 95696 63204"
              disabled={status === "sending"}
              className="w-full px-4 py-3.5 bg-white border border-[#DFD9CC] rounded-2xl text-[#1D2628] placeholder-[#7A898C]/60 text-sm focus:bg-white focus:border-[#0E2229] transition-all disabled:opacity-60"
            />
          </div>
        </div>

        {/* Optional Service Selector */}
        {showServiceSelect && (
          <div>
            <label
              htmlFor="service"
              className="block text-xs uppercase tracking-wider font-semibold text-[#1D2628] mb-1.5"
            >
              Select Practice Area / Inquiry <span className="text-[#A97A37]">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              disabled={status === "sending"}
              className="w-full px-4 py-3.5 bg-white border border-[#DFD9CC] rounded-2xl text-[#1D2628] text-sm focus:bg-white focus:border-[#0E2229] transition-all disabled:opacity-60 appearance-none cursor-pointer"
            >
              <option value="Bandha Integration Intensive">Bandha Integration Intensive</option>
              <option value="Hatha Yoga & Alignment">Hatha Yoga & Alignment</option>
              <option value="Ashtanga Yoga Practice">Ashtanga Yoga Practice</option>
              <option value="Vinyasa Flow">Vinyasa Flow</option>
              <option value="Pranayama & Breath Awareness">Pranayama & Breath Awareness</option>
              <option value="Mudra & Traditional Practices">Mudra & Traditional Practices</option>
              <option value="Meditation & Mind Observation">Meditation & Mind Observation</option>
              <option value="Shatkarma Cleansing Guidance">Shatkarma Cleansing Guidance</option>
              <option value="Pre & Post Natal Yoga">Pre & Post Natal Yoga</option>
              <option value="Advanced Asana Mentorship">Advanced Asana Mentorship</option>
              <option value="1-on-1 Personalized Session">1-on-1 Personalized Session</option>
            </select>
          </div>
        )}

        {/* Date and Time selectors for booking */}
        {showDateAndTime && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-xs uppercase tracking-wider font-semibold text-[#1D2628] mb-1.5"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                disabled={status === "sending"}
                className="w-full px-4 py-3.5 bg-white border border-[#DFD9CC] rounded-2xl text-[#1D2628] text-sm focus:bg-white focus:border-[#0E2229] transition-all disabled:opacity-60"
              />
            </div>
            <div>
              <label
                htmlFor="preferredTime"
                className="block text-xs uppercase tracking-wider font-semibold text-[#1D2628] mb-1.5"
              >
                Preferred Time Window
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                disabled={status === "sending"}
                className="w-full px-4 py-3.5 bg-white border border-[#DFD9CC] rounded-2xl text-[#1D2628] text-sm focus:bg-white focus:border-[#0E2229] transition-all disabled:opacity-60 cursor-pointer"
              >
                <option value="">Choose Time Window</option>
                <option value="Early Morning (6:30 AM - 9:00 AM)">
                  Early Morning (6:30 AM - 9:00 AM)
                </option>
                <option value="Midday / Afternoon (11:00 AM - 2:00 PM)">
                  Midday / Afternoon (11:00 AM - 2:00 PM)
                </option>
                <option value="Evening (5:00 PM - 7:30 PM)">
                  Evening (5:00 PM - 7:30 PM)
                </option>
                <option value="Weekend Masterclass Slot">Weekend Masterclass Slot</option>
              </select>
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-wider font-semibold text-[#1D2628] mb-1.5"
          >
            Message / Practice Goals
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell Harpreet about your practice background, specific areas of focus (Bandhas, alignment, breath, etc.), or any injuries..."
            disabled={status === "sending"}
            className="w-full px-4 py-3.5 bg-white border border-[#DFD9CC] rounded-2xl text-[#1D2628] placeholder-[#7A898C]/60 text-sm focus:bg-white focus:border-[#0E2229] transition-all resize-none disabled:opacity-60"
          ></textarea>
        </div>

        {/* 0 to 100% Sending Progress Button Animation */}
        <div className="pt-2">
          {status === "sending" ? (
            <div className="relative w-full h-14 bg-[#0E2229] rounded-full overflow-hidden flex items-center justify-center shadow-md">
              {/* Horizontal Progress Fill Animation */}
              <div
                className="absolute inset-y-0 left-0 bg-[#5C7267] transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />

              {/* Progress Text with percentage */}
              <div className="relative z-10 flex items-center gap-2.5 text-white text-sm font-medium tracking-wide">
                <RefreshCw className="w-4 h-4 animate-spin text-[#C89B58]" />
                <span>Sending... {progress}%</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="liquid-btn group relative w-full h-14 rounded-full overflow-hidden bg-[#0E2229] border border-[#0E2229] hover:border-[#C89B58] shadow-sm hover:shadow-lg hover:shadow-[#C89B58]/20 cursor-pointer text-white transition-all duration-300 ease-out active:scale-[0.98]"
            >
              {/* Secondary fluid wave */}
              <span
                aria-hidden="true"
                className="liquid-wave-secondary bg-[#DFC08A]"
              />
              {/* Primary fluid wave */}
              <span
                aria-hidden="true"
                className="liquid-wave bg-[#C89B58]"
              />
              {/* Specular fluid sheen */}
              <span aria-hidden="true" className="liquid-sheen" />

              {/* Button Text */}
              <span className="relative z-10 flex items-center justify-center gap-2 font-medium text-sm tracking-wide text-white group-hover:text-[#0E2229] transition-colors duration-300">
                <span>{submitButtonText}</span>
                <Send className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 shrink-0" />
              </span>
            </button>
          )}
        </div>
      </form>

      {/* Success Popup */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Message Sent Successfully"
        message="Thank you for reaching out to Yoga Regime. Your message has been received and Harpreet will respond within 24 hours."
      />
    </div>
  );
}
