import Navbar from "./components/navbar";
import Hero from "./components/hero";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default App;
