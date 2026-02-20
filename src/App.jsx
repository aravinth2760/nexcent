import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Clients from "./components/clients";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Clients Section */}
      <Clients />
    </div>
  );
};

export default App;
