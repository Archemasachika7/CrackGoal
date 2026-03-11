import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

function ExamMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="bg-card border border-border rounded-xl p-5 w-full max-w-sm shadow-lg"
    >
      {/* Timer Bar */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-text2">WBJEE Mock Test</span>
        <span className="text-xs font-mono font-semibold text-accent">
          01:42:15
        </span>
      </div>

      {/* Question Palette */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <div
            key={n}
            className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-medium border ${
              n === 3
                ? "bg-accent text-white border-accent"
                : n < 3
                  ? "bg-accent2/20 text-accent2 border-accent2/30"
                  : "bg-surface text-text2 border-border"
            }`}
          >
            {n}
          </div>
        ))}
      </div>

      {/* Question */}
      <div className="mb-3">
        <p className="text-sm text-text font-medium mb-3">
          Q3. If f(x) = x² + 2x + 1, find f&apos;(x):
        </p>
        <div className="space-y-2">
          {["2x + 2", "x² + 2", "2x + 1", "x + 2"].map((opt, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg border text-sm ${
                i === 0
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-text2"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  i === 0 ? "border-accent" : "border-border"
                }`}
              >
                {i === 0 && (
                  <div className="w-2 h-2 rounded-full bg-accent" />
                )}
              </div>
              {opt}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-space text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Train Like the{" "}
              <span className="text-accent">Real Exam.</span>
            </h1>
            <p className="text-text2 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              CrackGoal helps JEE and WBJEE aspirants practice with realistic
              mock tests, live competitions, and performance insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-accent text-white font-semibold px-7 py-3 rounded-lg text-base btn-primary"
              >
                Start Free Mock
              </motion.a>
              <motion.a
                href="#live-mock"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block border border-border text-text font-semibold px-7 py-3 rounded-lg text-base hover:bg-card transition-colors"
              >
                View Live Tests
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <ExamMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
