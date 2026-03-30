"use client";

import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";
import emailjs from "@emailjs/browser";


const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@cognidx.com",
    href: "mailto:info@cognidx.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: [
      { number: "+977 9819425801", href: "tel:+9779819425801" },
      { number: "+977 9840259379", href: "tel:+9779840259379" },
      { number: "+977 9801213666", href: "tel:+9779801213666" },
    ],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+977 9819425801",
    href: "https://wa.me/9779819425801?text=I'm%20interested%20in%20learning%20more%20about%20your%20products.",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error?.text || error?.message || "Failed to send message.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #7c3aed66, #7c3aed, #7c3aed66, transparent)",
        }}
      />
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-32 right-1/4 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className=" font-medium tracking-wide uppercase text-sm animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-violet-600 text-4xl md:text-5xl font-bold mt-4 mb-6  animate-fade-in animation-delay-100">
            Connecting You{" "}
            <span className="font-normal text-gray-900">
              with Reliable Biomedical Solutions
            </span>
          </h2>
          <p className="text-gray-700/80 animate-fade-in animation-delay-200">
            Explore our range of high-quality biomedical products. From lab equipment to diagnostic tools and consumables, our team is ready to provide expert guidance and ensure secure, fast delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-gray-200 bg-white/80 shadow-md backdrop-blur-md hover:shadow-lg transition-shadow animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {["Name", "Email", "Message"].map((label, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium mb-2 text-gray-800">
                    {label}
                  </label>
                  {label === "Message" ? (
                    <textarea
                      rows={5}
                      required
                      placeholder={`Your ${label.toLowerCase()}...`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-purple-500 focus:ring-1 focus:ring-purple-300 outline-none transition-all resize-none shadow-sm hover:shadow-md"
                    />
                  ) : (
                    <input
                      type={label === "Email" ? "email" : "text"}
                      required
                      placeholder={`Your ${label.toLowerCase()}...`}
                      value={label === "Email" ? formData.email : formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [label.toLowerCase()]: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-purple-500 focus:ring-1 focus:ring-purple-300 outline-none transition-all shadow-sm hover:shadow-md"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative overflow-hidden rounded-xl px-6 py-3 text-white font-medium 
  bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 
  hover:from-purple-700 hover:via-violet-700 hover:to-purple-800
  transition-all duration-300 shadow-md hover:shadow-xl 
  active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
  flex items-center justify-center gap-2 group"
              >
                {/* subtle glow effect */}
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success"
                    ? "bg-green-100 border border-green-200 text-green-700"
                    : "bg-red-100 border border-red-200 text-red-700"
                    }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Products */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            {/* Contact Info */}
            <div className="glass rounded-3xl p-8 bg-white/80 border border-gray-200 shadow-md backdrop-blur-md hover:shadow-lg transition-shadow">
              <h3 style={{ fontFamily: "Raleway, system-ui, sans-serif", }} className="text-xl font-semibold mb-6 text-gray-900">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors group shadow-sm hover:shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <item.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                        <div className="font-medium text-gray-900">
                          {Array.isArray(item.value) ? (
                            // Render multiple numbers
                            item.value.map((phone, idx) => (
                              <div key={idx}>
                                <a href={phone.href} className="hover:underline">
                                  {phone.number}
                                </a>
                              </div>
                            ))
                          ) : (
                            <a href={item.href} className="hover:underline">{item.value}</a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Availability Card */}
            <div className="glass rounded-3xl p-8 border border-gray-200 bg-white/80 shadow-md backdrop-blur-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                <span className="font-medium text-gray-900">Products Ready for You</span>
              </div>
              <p className="text-gray-700/80 text-sm">
                We offer a wide range of high-quality biomedical products, ready for immediate delivery.
                Whether you need lab equipment, diagnostic tools, or consumables, our team is here
                to provide expert guidance and ensure you get the right solutions for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};