import { motion } from "framer-motion";

const leaderboardData = [
  { rank: 1, name: "Aryan", score: 268 },
  { rank: 2, name: "Riya", score: 251 },
  { rank: 3, name: "Karan", score: 243 },
];

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-text mb-3">
            Leaderboard Preview
          </h2>
          <p className="text-text2 max-w-2xl mx-auto">
            See how top students are performing in recent mock tests.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto bg-card border border-border rounded-xl overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 text-xs font-semibold text-text2 uppercase tracking-wider">
                  Rank
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-text2 uppercase tracking-wider">
                  Student
                </th>
                <th className="text-right py-4 px-6 text-xs font-semibold text-text2 uppercase tracking-wider">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((row, i) => (
                <motion.tr
                  key={row.rank}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        row.rank === 1
                          ? "bg-accent/15 text-accent"
                          : "bg-surface text-text2"
                      }`}
                    >
                      {row.rank}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-text">
                    {row.name}
                  </td>
                  <td className="py-4 px-6 text-right text-sm font-mono font-semibold text-accent">
                    {row.score}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
