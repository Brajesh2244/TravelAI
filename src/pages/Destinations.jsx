import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowRight, Compass, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Destinations() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");
  const [continent, setContinent] = useState("All");
  const continents = ["All", ...new Set(destinations.map((item) => item.continent))];

  const filteredDestinations = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return destinations.filter((destination) => {
      const matchesQuery = !normalized || [destination.name, destination.country, destination.continent, destination.description].join(" ").toLowerCase().includes(normalized);
      return matchesQuery && (continent === "All" || destination.continent === continent);
    });
  }, [query, continent]);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <section className="page-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <p className="section-kicker mb-5">The collection</p>
          <h1 className="text-5xl sm:text-7xl text-white font-semibold leading-[0.95] mb-6">Go somewhere<br /><span className="text-[var(--accent)]">worth remembering.</span></h1>
          <p className="text-lg text-gray-400 max-w-xl">Handpicked places for curious travellers. Find your next chapter, then let AI shape the details.</p>
        </motion.div>
        <div className="surface-card rounded-2xl p-3 sm:p-4 mb-12 flex flex-col lg:flex-row gap-3">
          <label className="relative flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a city, country, or feeling" className="w-full rounded-xl bg-[var(--surface-1)] border border-white/5 pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)]" /></label>
          <div className="flex items-center gap-2 overflow-x-auto px-1"><SlidersHorizontal className="w-4 h-4 text-gray-500 shrink-0" />{continents.map((item) => <button key={item} type="button" onClick={() => setContinent(item)} className={`whitespace-nowrap rounded-lg px-4 py-3 text-sm ${continent === item ? "bg-[var(--accent)] text-[#07120f] font-semibold" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>{item}</button>)}</div>
        </div>
        <div className="flex items-end justify-between mb-6"><div><p className="eyebrow mb-2">Explore slowly</p><h2 className="text-3xl sm:text-4xl text-white">Places with a point of view</h2></div><span className="hidden sm:block text-sm text-gray-500">{filteredDestinations.length} destinations</span></div>
        {filteredDestinations.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredDestinations.map((destination, index) => <DestinationCard key={destination.id} destination={destination} index={index} />)}</div> : <div className="surface-card rounded-3xl p-12 text-center"><Compass className="w-10 h-10 text-[var(--accent)] mx-auto mb-4" /><h2 className="text-2xl text-white mb-2">No places found</h2><p className="text-gray-400 mb-6">Try a different city, country, or continent.</p><button type="button" onClick={() => { setQuery(""); setContinent("All"); }} className="text-[var(--accent)] inline-flex items-center gap-2">Clear filters <ArrowRight className="w-4 h-4" /></button></div>}
      </section>
    </div>
  );
}

export default Destinations;
