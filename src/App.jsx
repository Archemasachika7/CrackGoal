import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import PracticeProblems from "./components/PracticeProblems";
import UserProfile from "./components/UserProfile";
import LiveMock from "./components/LiveMock";
import Pricing from "./components/Pricing";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <PracticeProblems />
      <UserProfile />
      <LiveMock />
      <Pricing />
      <Leaderboard />
      <Footer />
    </div>
  );
}
