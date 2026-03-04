"use client";
import { useState } from "react";
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};


import { motion } from "framer-motion";
import { Globe, ShoppingCart, MessageSquare, Settings, Check } from "lucide-react";

export default function HomePage() {
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [business, setBusiness] = useState("");
const [message, setMessage] = useState("");
const sendToWhatsapp = () => {
  const text = encodeURIComponent(
`Hello, I would like to enquire about a website.

Name: ${name}
Phone: ${phone}
Business: ${business}
Project: ${message}`
  );

  window.open(
    `https://wa.me/60146942145?text=${text}`,
    "_blank"
  );
};
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">




      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 shadow-sm bg-white/80 backdrop-blur sticky top-0 z-50">
        <h1 className="text-2xl font-semibold tracking-tight">Altus</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#portfolio" className="hover:text-black">Portfolio</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
        <button className="rounded-2xl bg-black text-white px-5 py-2">
          Get Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-24 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Build Your Website & Online Store Professionally
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We design modern websites, setup online selling platforms and manage
            your digital business so you can focus on growth.
          </p>
          <div className="flex gap-4">
            <button className="rounded-2xl px-6 py-3 bg-black text-white">
              <a
              href="#contact"
                className="rounded-2xl px-6 py-3 bg-black text-white"
              >
               Start Your Project
              </a>

            </button>
            <button className="rounded-2xl px-6 py-3 border">
                          <a
              href="#services"
        
            >
              View Services
</a>

            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 gap-6">
            <Feature icon={<Globe />} title="Website Design" />
            <Feature icon={<ShoppingCart />} title="Online Store" />
            <Feature icon={<MessageSquare />} title="Consultation" />
            <Feature icon={<Settings />} title="Management" />
          </div>
        </motion.div>

        <section className="px-10 py-12 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-gray-500 mb-6">
      Trusted by Growing Businesses
    </p>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center opacity-60">
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
    </div>
  </div>
</section>

      </section>

      {/* Services */}
      <section id="services" className="px-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Complete digital solutions for modern businesses</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="rounded-2xl shadow-lg bg-white p-6 hover:shadow-xl transition">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <section id="about" className="px-10 py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">
      About Altus
    </h2>

    <p className="text-gray-600 leading-relaxed">
      Altus helps businesses build professional websites and
      online selling platforms. We focus on clean design, performance and
      conversion so businesses can grow online with confidence.
    </p>
  </div>
</section>

      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-10 py-20 bg-gray-50">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-gray-600">Flexible packages for different business stages</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className={`rounded-2xl shadow-lg bg-white p-8 ${plan.popular ? "border-2 border-black" : ""}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check size={16} /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-xl bg-black text-white py-3">
                  <a
                  href="#contact"
                  className="block text-center w-full rounded-xl bg-black text-white py-3"
                  >
                   Get Started
                  </a>

                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
<section id="portfolio" className="px-10 py-20 bg-white">
  <div className="text-center mb-14">
    <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
    <p className="text-gray-600">
      Examples of websites and online stores we built
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    <div className="rounded-2xl overflow-hidden shadow-md">
      <img
        src="/project1.webp"
        alt="Ecommerce Website"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">E-Commerce Store Design</h3>
        <p className="text-sm text-gray-500">
          Online store setup and design
        </p>
      </div>
    </div>

    <div className="rounded-2xl overflow-hidden shadow-md">
      <img
        src="/project2.webp"
        alt="Corporate Website"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">Corporate Website</h3>
        <p className="text-sm text-gray-500">
          Business website development
        </p>
      </div>
    </div>

    <div className="rounded-2xl overflow-hidden shadow-md">
      <img
        src="/project3.png"
        alt="Service Website"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">Service Business Website</h3>
        <p className="text-sm text-gray-500">
          Professional service website
        </p>
      </div>
    </div>

    <div className="rounded-2xl overflow-hidden shadow-md">
  <img
    src="/project4.webp"
    alt="Restaurant Website"
    className="w-full h-56 object-cover"
  />
  <div className="p-4">
    <h3 className="font-semibold">Restaurant Website</h3>
    <p className="text-sm text-gray-500">
      Food ordering website design
    </p>
  </div>
</div>

<div className="rounded-2xl overflow-hidden shadow-md">
  <img
    src="/project5.webp"
    alt="Online Course Platform"
    className="w-full h-56 object-cover"
  />
  <div className="p-4">
    <h3 className="font-semibold">Online Course Platform</h3>
    <p className="text-sm text-gray-500">
      Learning platform website
    </p>
  </div>
</div>

<div className="rounded-2xl overflow-hidden shadow-md">
  <img
    src="/project6.jpg"
    alt="Company Landing Page"
    className="w-full h-56 object-cover"
  />
  <div className="p-4">
    <h3 className="font-semibold">Company Landing Page</h3>
    <p className="text-sm text-gray-500">
      Modern business landing page
    </p>
  </div>
</div>

  </div>
</section>


      {/* CTA */}
      <section id="contact" className="px-10 py-20 bg-gray-50">
  <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
    <h2 className="text-3xl font-bold mb-6 text-center">
      Get Free Consultation
    </h2>

    <div className="grid gap-4">
      <input
  className="border rounded-lg px-4 py-3"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

      <input
        className="border rounded-lg px-4 py-3"
        placeholder="Phone / WhatsApp"
      />

      <input
        className="border rounded-lg px-4 py-3"
        placeholder="Business Type"
      />

      <textarea
        className="border rounded-lg px-4 py-3"
        rows={4}
        placeholder="Tell us about your project"
      />

      <button
  type="button"
  onClick={sendToWhatsapp}
  className="bg-black text-white py-3 rounded-lg"
>
  Send Inquiry
</button>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="px-10 py-10 bg-gray-100 text-center text-sm text-gray-500">
        © 2026 Altus SDN BHD. All rights reserved.
        <p>Malaysia Registered Business</p>
        <p>SSM Registration: 202601006557 (1668655-W)</p>
      </footer>

<a
  href="https://wa.me/60146942145"
  target="_blank"
  className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl z-[9999] hover:scale-105 transition"
>
  <span>💬</span>
  WhatsApp Us
</a>




    </div>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-6 rounded-xl bg-gray-50">
      {icon}
      <h3 className="font-semibold mt-3">{title}</h3>
    </div>
  );
}

const services = [
  {
    title: "Website Design",
    description:
      "Modern, responsive business websites designed to convert visitors into customers.",
    icon: <Globe />,
  },
  {
    title: "Online Store Setup",
    description:
      "Complete e-commerce setup including payment integration and product upload.",
    icon: <ShoppingCart />,
  },
  {
    title: "Consultation Service",
    description:
      "Professional guidance to help you start and scale your online business.",
    icon: <MessageSquare />,
  },
  {
    title: "Store Management",
    description:
      "Monthly management service to maintain and grow your online store.",
    icon: <Settings />,
  },
];

const pricing = [
  {
    name: "Basic",
    price: "RM 1,500",
    features: [
      "Business Website Setup",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "1 Month Support",
    ],
  },
  {
    name: "Standard",
    price: "RM 3,500",
    popular: true,
    features: [
      "Website + Online Store",
      "Payment Gateway Setup",
      "Product Upload",
      "SEO Optimization",
      "2 Months Support",
    ],
  },
  {
    name: "Premium",
    price: "RM 6,500",
    features: [
      "Full Custom Website",
      "Online Store Setup",
      "Monthly Store Management",
      "Performance Optimization",
      "Priority Support",
    ],
  },
];
