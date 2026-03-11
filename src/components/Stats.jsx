import { motion } from "framer-motion";
import { BookOpen, Users, Calendar } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "500+",
    label: "Mock Tests Available",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Active Students",
  },
  {
    icon: Calendar,
    value: "Every Sunday",
    label: "Weekly Live Tests",
  },
];

export default function Stats() {
  return (
    <section className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <stat.icon className="mx-auto mb-3 text-accent" size={28} />
              <p className="font-space text-2xl sm:text-3xl font-bold text-text mb-1">
                {stat.value}
              </p>
              <p className="text-text2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
