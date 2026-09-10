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
    service: defaultService || "Hatha Yoga Session",
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
        "https://formsubmit.co/ajax/Himanshukhanegwal@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Inquiry from Serena Yoga: ${formData.name}`,
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
            service: defaultService || "Hatha Yoga Session",
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
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0B2A3A] font-medium">
            {formTitle}
          </h3>
          {formSubtitle && (
            <p className="text-sm text-[#586771] mt-1">{formSubtitle}</p>
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

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-wider font-semibold text-[#243038] mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Maya Johnson"
            disabled={status === "sending"}
            className="w-full px-4 py-3.5 bg-white border border-[#EAE7E1] rounded-2xl text-[#243038] placeholder-[#7E8D98]/60 text-sm focus:bg-white focus:border-[#0B2A3A] transition-all disabled:opacity-60"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider font-semibold text-[#243038] mb-1.5"
            >
              Email <span className="text-red-500">*</span>
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
              className="w-full px-4 py-3.5 bg-white border border-[#EAE7E1] rounded-2xl text-[#243038] placeholder-[#7E8D98]/60 text-sm focus:bg-white focus:border-[#0B2A3A] transition-all disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-wider font-semibold text-[#243038] mb-1.5"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 234-5678"
              disabled={status === "sending"}
              className="w-full px-4 py-3.5 bg-white border border-[#EAE7E1] rounded-2xl text-[#243038] placeholder-[#7E8D98]/60 text-sm focus:bg-white focus:border-[#0B2A3A] transition-all disabled:opacity-60"
            />
          </div>
        </div>

        {/* Optional Service Selector */}
        {showServiceSelect && (
          <div>
            <label
              htmlFor="service"
              className="block text-xs uppercase tracking-wider font-semibold text-[#243038] mb-1.5"
            >
              Select Service / Class <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              disabled={status === "sending"}
              className="w-full px-4 py-3.5 bg-white border border-[#EAE7E1] rounded-2xl text-[#243038] text-sm focus:bg-white focus:border-[#0B2A3A] transition-all disabled:opacity-60 appearance-none cursor-pointer"
            >
              <option value="1-on-1 Private Yoga">1-on-1 Private Yoga</option>
              <option value="Hatha Yoga Foundation">Hatha Yoga Foundation</option>
              <option value="Vinyasa Flow Class">Vinyasa Flow Class</option>
              <option value="Meditation & Breathwork Intensive">
                Meditation & Breathwork Intensive
              </option>
              <option value="Prenatal Yoga Program">
                Prenatal Yoga Program
              </option>
              <option value="Corporate Wellness Workshop">
                Corporate Wellness Workshop
              </option>
              <option value="Virtual Studio Monthly Pass">
                Virtual Studio Monthly Pass
              </option>
            </select>
          </div>
        )}

        {/* Date and Time selectors for booking */}
        {showDateAndTime && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-xs uppercase tracking-wider font-semibold text-[#243038] mb-1.5"
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
                className="w-full px-4 py-3.5 bg-white border border-[#EAE7E1] rounded-2xl text-[#243038] text-sm focus:bg-white focus:border-[#0B2A3A] transition-all disabled:opacity-60"
              />
            </div>
            <div>
              <label
                htmlFor="preferredTime"
                className="block text-xs uppercase tracking-wider font-semibold text-[#243038] mb-1.5"
              >
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                disabled={status === "sending"}
                className="w-full px-4 py-3.5 bg-white border border-[#EAE7E1] rounded-2xl text-[#243038] text-sm focus:bg-white focus:border-[#0B2A3A] transition-all disabled:opacity-60 cursor-pointer"
              >
                <option value="">Choose Time Window</option>
                <option value="Morning (7:00 AM - 10:00 AM)">
                  Morning (7:00 AM - 10:00 AM)
                </option>
                <option value="Midday (11:00 AM - 2:00 PM)">
                  Midday (11:00 AM - 2:00 PM)
                </option>
                <option value="Evening (4:00 PM - 7:30 PM)">
                  Evening (4:00 PM - 7:30 PM)
                </option>
                <option value="Weekend Special">Weekend Special</option>
              </select>
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-wider font-semibold text-[#243038] mb-1.5"
          >
            Message / Goals
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell Serena about your current experience level, specific goals, or any physical limitations..."
            disabled={status === "sending"}
            className="w-full px-4 py-3.5 bg-white border border-[#EAE7E1] rounded-2xl text-[#243038] placeholder-[#7E8D98]/60 text-sm focus:bg-white focus:border-[#0B2A3A] transition-all resize-none disabled:opacity-60"
          ></textarea>
        </div>

        {/* 0 to 100% Sending Progress Button Animation */}
        <div className="pt-2">
          {status === "sending" ? (
            <div className="relative w-full h-14 bg-[#0B2A3A] rounded-full overflow-hidden flex items-center justify-center shadow-md">
              {/* Horizontal Progress Fill Animation */}
              <div
                className="absolute inset-y-0 left-0 bg-[#6E7F72] transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />

              {/* Progress Text with percentage */}
              <div className="relative z-10 flex items-center gap-2.5 text-white text-sm font-medium tracking-wide">
                <RefreshCw className="w-4 h-4 animate-spin text-[#D8C9B8]" />
                <span>Sending... {progress}%</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="group relative w-full h-14 rounded-full overflow-hidden bg-[#D8C9B8] border border-[#0B2A3A] shadow-sm hover:shadow-md cursor-pointer text-white transition-all duration-400 ease-out active:scale-[0.99]"
            >
              {/* Split-away curtain Left */}
              <span className="absolute inset-y-0 left-0 w-[50.5%] bg-[#0B2A3A] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-full z-0" />
              {/* Split-away curtain Right */}
              <span className="absolute inset-y-0 right-0 w-[50.5%] bg-[#0B2A3A] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full z-0" />

              {/* Button Text */}
              <span className="relative z-10 flex items-center justify-center gap-2 font-medium text-sm tracking-wide text-white group-hover:text-[#0B2A3A] transition-colors duration-300">
                <span>{submitButtonText}</span>
                <Send className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
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
        message="Thank you for reaching out to Serena Yoga. Your message has been received and Serena will respond within 24 hours."
      />
    </div>
  );
}
