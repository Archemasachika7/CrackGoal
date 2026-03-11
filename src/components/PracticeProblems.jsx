import { motion } from "framer-motion";
import { Check, Minus, Circle } from "lucide-react";

const problems = [
  {
    id: 1,
    title: "Projectile Motion on an Inclined Plane",
    category: "Physics",
    difficulty: "Easy",
    status: "solved",
  },
  {
    id: 2,
    title: "Chemical Equilibrium Constants",
    category: "Chemistry",
    difficulty: "Medium",
    status: "attempted",
  },
  {
    id: 3,
    title: "Integration by Partial Fractions",
    category: "Mathematics",
    difficulty: "Medium",
    status: "solved",
  },
  {
    id: 4,
    title: "Electromagnetic Induction in Coils",
    category: "Physics",
    difficulty: "Hard",
    status: "not_started",
  },
  {
    id: 5,
    title: "Thermodynamics — Carnot Cycle",
    category: "Chemistry",
    difficulty: "Easy",
    status: "solved",
  },
  {
    id: 6,
    title: "Matrices and Determinants",
    category: "Mathematics",
    difficulty: "Hard",
    status: "attempted",
  },
];

const difficultyConfig = {
  Easy: { color: "text-easy", bg: "bg-easy/15", border: "border-easy/30" },
  Medium: { color: "text-medium", bg: "bg-medium/15", border: "border-medium/30" },
  Hard: { color: "text-hard", bg: "bg-hard/15", border: "border-hard/30" },
};

const statusConfig = {
  solved: { icon: Check, color: "text-easy", label: "Solved" },
  attempted: { icon: Circle, color: "text-medium", label: "Attempted" },
  not_started: { icon: Minus, color: "text-text2", label: "Not Started" },
};

const categoryColors = {
  Physics: "bg-accent/10 text-accent border-accent/20",
  Chemistry: "bg-accent2/10 text-accent2 border-accent2/20",
  Mathematics: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function PracticeProblems() {
  return (
    <section id="practice" className="bg-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-text mb-3">
            Practice Problems
          </h2>
          <p className="text-text2 max-w-2xl mx-auto">
            Sharpen your skills with curated problems across all subjects and difficulty levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => {
            const diff = difficultyConfig[problem.difficulty];
            const stat = statusConfig[problem.status];
            const StatusIcon = stat.icon;
            const catColor = categoryColors[problem.category];

            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 card-hover hover:border-accent/40 group cursor-pointer"
              >
                {/* Status + Difficulty Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <StatusIcon size={16} className={stat.color} />
                    <span className={`text-xs font-medium ${stat.color}`}>
                      {stat.label}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${diff.bg} ${diff.color} ${diff.border}`}
                  >
                    {problem.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-inter text-sm font-semibold text-text mb-3 leading-snug group-hover:text-accent transition-colors">
                  {problem.title}
                </h3>

                {/* Category Tag */}
                <span
                  className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md border ${catColor}`}
                >
                  {problem.category}
                </span>

                {/* Problem ID in mono font */}
                <p className="font-mono text-xs text-text2 mt-3">
                  #{String(problem.id).padStart(4, "0")}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
