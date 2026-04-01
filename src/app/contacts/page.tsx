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

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, publicKey);
      setSubmitStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS error:", error);
      setSubmitStatus({ type: "error", message: error?.text || error?.message || "Failed to send message." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(12px) translateY(-8px); }
          66% { transform: translateX(-8px) translateY(10px); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 0.6; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .contact-section {
          position: relative;
          padding: 7rem 0 6rem;
          background: #faf9ff;
          overflow: hidden;
        }

        /* Decorative blobs */
        .blob-1 {
          position: absolute; top: -80px; right: -80px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, #ede9fe 0%, #f5f3ff 50%, transparent 75%);
          border-radius: 50%;
          animation: float-slow 9s ease-in-out infinite;
          pointer-events: none;
        }
        .blob-2 {
          position: absolute; bottom: -60px; left: -60px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, #ddd6fe 0%, #ede9fe 50%, transparent 75%);
          border-radius: 50%;
          animation: drift 12s ease-in-out infinite;
          pointer-events: none;
        }
        .blob-3 {
          position: absolute; top: 40%; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 200px;
          background: radial-gradient(ellipse, #c4b5fd22 0%, transparent 70%);
          pointer-events: none;
        }

        /* Dot grid texture */
        .dot-grid {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, #7c3aed18 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* Top accent line */
        .accent-line {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent 0%, #a78bfa 20%, #7c3aed 50%, #a78bfa 80%, transparent 100%);
        }

        /* Section container */
        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 10;
        }

        /* Header */
        .contact-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 4rem;
          animation: fade-up 0.7s ease both;
        }
        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f2f1f5;
          background: linear-gradient(135deg, #7c3aed, #6d28d9);
          border: 1px solid #ddd6fe;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          margin-bottom: 1.25rem;
        }
        .contact-eyebrow::before {
          content: '';
          display: inline-block;
          width: 6px; height: 6px;
          background: rgba(255,255,255,0.7);
          box-shadow: 0 0 6px rgba(255,255,255,0.9);
          border-radius: 50%;
          animation: pulse-ring 1.8s ease-out;
        }
        .contact-title {
          font-size: clamp(2rem, 4vw, 2.85rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1rem;
          color: #7c3aed;
        }
        .contact-title span {
          font-weight: 400;
          color: #1e1b4b;
        }
        .contact-desc {
          color: #6b7280;
          line-height: 1.75;
          font-size: 0.975rem;
        }

        /* Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        /* Card base */
        .card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e9e5ff;
          box-shadow:
            0 4px 6px -1px #7c3aed0a,
            0 12px 30px -8px #7c3aed12,
            inset 0 1px 0 0 #ffffff;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          overflow: hidden;
        }
        .card:hover {
          box-shadow:
            0 8px 16px -2px #7c3aed14,
            0 24px 48px -12px #7c3aed20,
            inset 0 1px 0 0 #ffffff;
          transform: translateY(-2px);
        }

        /* Form card */
        .form-card {
          padding: 2.5rem;
          animation: fade-up 0.6s ease 0.15s both;
        }
        .form-card-header {
          margin-bottom: 1.75rem;
        }
        .form-card-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 0.25rem;
        }
        .form-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1e1b4b;
        }

        /* Form fields */
        .field-group { margin-bottom: 1.25rem; }
        .field-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.45rem;
          letter-spacing: 0.02em;
        }
        .field-input, .field-textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          border: 1.5px solid #e5e7eb;
          background: #faf9ff;
          font-size: 0.9rem;
          color: #1e1b4b;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          box-sizing: border-box;
          font-family: inherit;
        }
        .field-input::placeholder, .field-textarea::placeholder {
          color: #c4b5fd;
        }
        .field-input:focus, .field-textarea:focus {
          border-color: #7c3aed;
          background: #ffffff;
          box-shadow: 0 0 0 3px #7c3aed18;
        }
        .field-textarea { resize: none; min-height: 130px; }

        /* Submit button */
        .submit-btn {
          width: 100%;
          padding: 0.875rem 1.5rem;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #8b5cf6 100%);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px #7c3aed40;
          font-family: inherit;
          margin-top: 0.5rem;
        }
        .submit-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, #ffffff22, transparent);
          background-size: 200% 100%;
          animation: shimmer 2.5s linear infinite;
        }
        .submit-btn:hover:not(:disabled) {
          box-shadow: 0 6px 22px #641edd55;
          transform: translateY(-1px);
        }
        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }
        .submit-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        .submit-btn svg {
          transition: transform 0.2s;
        }
        .submit-btn:hover:not(:disabled) svg {
          transform: translateX(3px);
        }

        /* Status messages */
        .status-msg {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.875rem 1rem;
          border-radius: 12px;
          font-size: 0.85rem;
          margin-top: 0.75rem;
          animation: fade-up 0.3s ease both;
        }
        .status-success {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #15803d;
        }
        .status-error {
          background: #fff1f2;
          border: 1px solid #fecdd3;
          color: #be123c;
        }

        /* Right column */
        .right-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: fade-up 0.6s ease 0.3s both;
        }

        /* Info card */
        .info-card { padding: 2rem 2rem 1.5rem; }
        .info-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1e1b4b;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .info-card-title::before {
          content: '';
          display: block;
          width: 3px;
          height: 18px;
          background: linear-gradient(180deg, #7c3aed, #a78bfa);
          border-radius: 2px;
        }

        /* Contact items */
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.875rem 1rem;
          border-radius: 14px;
          margin-bottom: 0.5rem;
          transition: background 0.2s;
          cursor: default;
        }
        .contact-item:hover { background: #f5f3ff; }
        .contact-icon-wrap {
          width: 42px; height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 2px 8px #7c3aed18;
        }
        .contact-item:hover .contact-icon-wrap {
          background: linear-gradient(135deg, #ddd6fe, #c4b5fd);
          transform: scale(1.08);
        }
        .contact-icon-wrap svg { color: #6d28d9; }
        .contact-item-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 0.2rem;
        }
        .contact-item-value {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1e1b4b;
          line-height: 1.6;
        }
        .contact-item-value a {
          text-decoration: none;
          color: inherit;
          transition: color 0.15s;
        }
        .contact-item-value a:hover { color: #7c3aed; }

        /* Divider between contact items */
        .contact-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e9e5ff, transparent);
          margin: 0.25rem 0.75rem;
        }

        /* Availability card */
        .avail-card {
          padding: 1.75rem 2rem;
          background: linear-gradient(135deg, #2a0e54 0%, #2c1157 50%, #1a0344 100%);
          border: none;
          position: relative;
          overflow: hidden;
        }
        
      
        .avail-inner { position: relative; z-index: 1; }
        .avail-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff1a;
          border: 1px solid #ffffff30;
          border-radius: 100px;
          padding: 0.3rem 0.85rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #e9d5ff;
          letter-spacing: 0.06em;
          margin-bottom: 0.875rem;
        }
        .pulse-dot {
          width: 7px; height: 7px;
          background: #a3e635;
          border-radius: 50%;
          position: relative;
        }
        .pulse-dot::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 50%;
          background: #a3e635;
          animation: pulse-ring 1.8s ease-out infinite;
        }
        .avail-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .avail-desc {
          font-size: 0.825rem;
          color: #c4b5fd;
          line-height: 1.7;
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="accent-line" />
        <div className="dot-grid" />
        <div className="blob-1" />
        <div className="blob-2" />
        <div className="blob-3" />

        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <div><span className="contact-eyebrow">Get In Touch</span></div>
            <h2 className="contact-title">
              Connecting You{" "}
              <span>with Reliable Biomedical Solutions</span>
            </h2>
            <p className="contact-desc">
              Explore our range of high-quality biomedical products. From lab equipment to diagnostic tools and consumables, our team is ready to provide expert guidance and ensure secure, fast delivery.
            </p>
          </div>

          <div className="contact-grid">
            {/* Form Card */}
            <div className="card form-card">
              <div className="form-card-header">
                <div className="form-card-label">Send a Message</div>
                <div className="form-card-title">We'd love to hear from you</div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="field-group">
                  <label className="field-label">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="field-input"
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Your email..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="field-input"
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">Message</label>
                  <textarea
                    required
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="field-textarea"
                  />
                </div>

                <button type="submit" disabled={isLoading} className="submit-btn">
                  {isLoading ? "Sending…" : (<>Send Message <Send size={16} /></>)}
                </button>

                {submitStatus.type && (
                  <div className={`status-msg ${submitStatus.type === "success" ? "status-success" : "status-error"}`}>
                    {submitStatus.type === "success"
                      ? <CheckCircle size={17} />
                      : <AlertCircle size={17} />}
                    <p>{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Right Column */}
            <div className="right-col">
              {/* Contact Info */}
              <div className="card info-card">
                <div className="info-card-title">Contact Information</div>
                {contactInfo.map((item, i) => (
                  <div key={i}>
                    <div className="contact-item">
                      <div className="contact-icon-wrap">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <div className="contact-item-label">{item.label}</div>
                        <div className="contact-item-value">
                          {Array.isArray(item.value)
                            ? item.value.map((phone, idx) => (
                              <div key={idx}>
                                <a href={phone.href}>{phone.number}</a>
                              </div>
                            ))
                            : <a href={item.href}>{item.value}</a>}
                        </div>
                      </div>
                    </div>
                    {i < contactInfo.length - 1 && <div className="contact-divider" />}
                  </div>
                ))}
              </div>

              {/* Availability Card */}
              <div className="card avail-card">
                <div className="avail-inner">
                  <div className="avail-badge">
                    <span className="pulse-dot" />
                    Products Ready for You
                  </div>
                  <div className="avail-title">Wide Range. Ready for Delivery.</div>
                  <p className="avail-desc">
                    We offer a wide range of high quality biomedical products, ready for immediate delivery.
                    Whether you need lab equipment, diagnostic tools, or consumables, our team is here
                    to provide expert guidance and ensure you get the right solutions for your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default function Contact() {
  return <Form />;
}
