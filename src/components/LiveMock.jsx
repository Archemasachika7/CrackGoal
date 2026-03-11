import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// Initial countdown duration: 2 hours, 13 minutes, 45 seconds
const INITIAL_COUNTDOWN_SECONDS = 2 * 3600 + 13 * 60 + 45;

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(INITIAL_COUNTDOWN_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return { hours, minutes, seconds };
}

function AnimatedGrid() {
  const { isDark } = useTheme();
  const lineColor = isDark ? "rgba(58,134,255,0.06)" : "rgba(47,109,246,0.05)";

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

export default function LiveMock() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <section id="live-mock" className="bg-surface py-20 relative overflow-hidden">
      <AnimatedGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-text mb-3">
            Upcoming Live Mock
          </h2>
          <p className="text-text2">Compete in real-time with other aspirants.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto bg-card border border-border rounded-xl p-8 text-center"
        >
          <p className="text-accent font-space font-semibold text-lg mb-2">
            WBJEE Live Mock
          </p>
          <p className="text-text2 text-sm mb-6">Starts In</p>

          <div className="flex justify-center gap-3 mb-8">
            {[
              { value: hours, label: "HRS" },
              { value: minutes, label: "MIN" },
              { value: seconds, label: "SEC" },
            ].map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="bg-surface border border-border rounded-lg w-16 h-16 flex items-center justify-center mb-1">
                  <span className="font-mono text-2xl font-bold text-text">
                    {unit.value}
                  </span>
                </div>
                <span className="text-text2 text-xs">{unit.label}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-accent text-white font-semibold px-7 py-3 rounded-lg text-sm btn-primary"
          >
            Register for Live Mock
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
