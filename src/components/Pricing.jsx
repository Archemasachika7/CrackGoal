import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "WBJEE Pack",
    price: "₹69",
    features: ["3 Full Mocks", "3 Subject Tests", "2 Live Mocks"],
    featured: false,
  },
  {
    name: "JEE Main Pack",
    price: "₹99",
    features: ["4 Full Mocks", "6 Subject Tests", "2 Live Mocks"],
    featured: true,
  },
  {
    name: "JEE Advanced Pack",
    price: "₹129",
    features: ["5 Full Mocks", "8 Subject Tests", "2 Live Mocks"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-text mb-3">
            Simple, Student-Friendly Pricing
          </h2>
          <p className="text-text2 max-w-2xl mx-auto">
            Quality mock tests at prices every student can afford.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`rounded-xl p-6 border ${
                plan.featured
                  ? "bg-accent/5 border-accent scale-[1.03]"
                  : "bg-card border-border"
              } transition-all duration-300`}
            >
              {plan.featured && (
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-space text-lg font-semibold text-text mb-1">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-text mb-6">
                {plan.price}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-text2 text-sm">
                    <Check size={16} className="text-accent2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`block text-center font-semibold py-2.5 rounded-lg text-sm ${
                  plan.featured
                    ? "bg-accent text-white"
                    : "bg-surface border border-border text-text hover:bg-card"
                } transition-colors`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
