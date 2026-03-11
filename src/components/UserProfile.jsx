import { motion } from "framer-motion";
import { Flame, Target, Award } from "lucide-react";

// Generate mock heatmap data for 20 weeks (140 days)
function generateHeatmapData() {
  const data = [];
  const today = new Date();
  for (let i = 139; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    // Weighted random: more likely to have activity on weekdays
    const dayOfWeek = date.getDay();
    const isWeekday = dayOfWeek > 0 && dayOfWeek < 6;
    const rand = Math.random();
    let level;
    if (rand < (isWeekday ? 0.15 : 0.35)) level = 0;
    else if (rand < (isWeekday ? 0.4 : 0.6)) level = 1;
    else if (rand < (isWeekday ? 0.7 : 0.8)) level = 2;
    else if (rand < (isWeekday ? 0.9 : 0.95)) level = 3;
    else level = 4;
    data.push({ date, level });
  }
  return data;
}

const heatmapData = generateHeatmapData();

const heatmapColors = {
  0: "bg-border/40",
  1: "bg-accent/20",
  2: "bg-accent/40",
  3: "bg-accent/65",
  4: "bg-accent",
};

function ActivityHeatmap() {
  // Organize into weeks (columns of 7 days)
  const weeks = [];
  for (let i = 0; i < heatmapData.length; i += 7) {
    weeks.push(heatmapData.slice(i, i + 7));
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Flame size={18} className="text-accent" />
        <h3 className="font-space text-sm font-semibold text-text">
          Activity Heatmap
        </h3>
        <span className="font-mono text-xs text-accent ml-auto">
          127 day streak
        </span>
      </div>
      <div className="flex gap-1 overflow-x-auto pb-2">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <div
                key={di}
                className={`w-3 h-3 rounded-sm ${heatmapColors[day.level]}`}
                title={`${day.date.toLocaleDateString()}: Level ${day.level}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-3 text-xs text-text2">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-3 h-3 rounded-sm ${heatmapColors[level]}`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

function ProgressRing({ label, percentage, color }) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-border"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-sm font-bold text-text">
            {percentage}%
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-text2 text-center">
        {label}
      </span>
    </div>
  );
}

const progressData = [
  { label: "Physics", percentage: 72, color: "var(--color-accent)" },
  { label: "Chemistry", percentage: 58, color: "var(--color-accent2)" },
  { label: "Mathematics", percentage: 85, color: "#A855F7" },
];

export default function UserProfile() {
  return (
    <section id="profile" className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-text mb-3">
            Track Your Progress
          </h2>
          <p className="text-text2 max-w-2xl mx-auto">
            Visualize your preparation journey with detailed activity tracking and subject-wise insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Heatmap Card - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-card border border-border rounded-xl p-6 card-hover"
          >
            <ActivityHeatmap />
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-6 card-hover"
          >
            <h3 className="font-space text-sm font-semibold text-text mb-5 flex items-center gap-2">
              <Award size={18} className="text-accent" />
              Quick Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-text2">Problems Solved</span>
                <span className="font-mono text-sm font-bold text-text">
                  342
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text2">Mock Tests Taken</span>
                <span className="font-mono text-sm font-bold text-text">
                  28
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text2">Current Streak</span>
                <span className="font-mono text-sm font-bold text-accent">
                  127 days
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text2">Best Rank</span>
                <span className="font-mono text-sm font-bold text-accent2">
                  #12
                </span>
              </div>
            </div>
          </motion.div>

          {/* Progress Rings Card - spans 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 bg-card border border-border rounded-xl p-6 card-hover"
          >
            <h3 className="font-space text-sm font-semibold text-text mb-6 flex items-center gap-2">
              <Target size={18} className="text-accent" />
              Subject-wise Completion
            </h3>
            <div className="flex justify-center gap-12 flex-wrap">
              {progressData.map((item) => (
                <ProgressRing key={item.label} {...item} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
