import { motion } from "framer-motion";
import {
  Monitor,
  Trophy,
  BookOpen,
  BarChart3,
  TrendingUp,
  Tag,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Real Exam Interface",
    desc: "Practice in an environment that mirrors actual JEE and WBJEE exam interfaces.",
  },
  {
    icon: Trophy,
    title: "Live Mock Competitions",
    desc: "Compete with thousands of students in scheduled live mock exams.",
  },
  {
    icon: BookOpen,
    title: "Subject-wise Practice",
    desc: "Focus on Physics, Chemistry, or Mathematics with targeted practice tests.",
  },
  {
    icon: BarChart3,
    title: "Instant Ranking",
    desc: "See where you stand instantly with real-time ranking after every test.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    desc: "Track your strengths and weaknesses with detailed performance reports.",
  },
  {
    icon: Tag,
    title: "Affordable Test Packs",
    desc: "Get access to high-quality mock tests at student-friendly prices.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-text mb-3">
            Everything You Need to Crack It
          </h2>
          <p className="text-text2 max-w-2xl mx-auto">
            Tools and features designed specifically for competitive exam preparation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-space text-lg font-semibold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-text2 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
