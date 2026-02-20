import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Clients from "./components/clients";
import Community from "./components/Community";
import Info1 from "./components/Info1";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Clients Section */}
      <Clients />

      {/* Community Section */}
      <Community />

      {/* Info Section 1 */}
      <Info1 />
    </div>
  );
};

export default App;
