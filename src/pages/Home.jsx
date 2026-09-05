import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDownRight, ArrowRight, Calendar, Compass, Globe2, MapPin, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import LocationSelector from "../components/LocationSelector";

const image = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;
const heroImage = image("photo-1500534623283-312aade485b7");
const storyImages = [image("photo-1530789253388-582c481c54b0", 1100), image("photo-1526772662000-3f88f10405ff", 1000)];

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } };

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();
  const featured = destinations.slice(0, 3);

  const handleSearch = (event) => {
    event.preventDefault();
    const value = searchInput.trim();
    navigate(value ? `/destinations?search=${encodeURIComponent(value)}` : "/destinations");
  };

  const handleLocationSelect = (location) => {
    if (!location) return;
    setSelectedLocation(location);
    setSearchInput(location.city || location.name || location.country || "");
  };

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-end overflow-hidden hero-cinematic">
        <video autoPlay loop muted playsInline preload="metadata" poster={heroImage} className="hero-video" aria-label="Cinematic travel landscape">
          <source src="/media/307130.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay hero-overlay-horizontal" />
        <div className="hero-overlay hero-overlay-bottom" />
        <div className="relative z-10 page-shell w-full pt-32 pb-10 sm:pb-14">
          <motion.div initial={{ opacity: 0, y: 30, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl">
            <p className="eyebrow mb-5">AI-powered travel planning</p>
            <h1 className="text-[clamp(3.5rem,8vw,8rem)] text-white leading-[0.84] font-semibold max-w-4xl">Explore the world<br /><em className="text-[var(--accent)] not-italic">beyond ordinary.</em></h1>
            <p className="text-base sm:text-xl text-white/85 max-w-xl mt-7 mb-7">Curated places, considered routes, and an AI companion for the journey in between.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.22 }} className="hero-search-panel max-w-4xl surface-card rounded-2xl p-3 sm:p-4">
            <form onSubmit={handleSearch} className="relative mb-3"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--accent)] w-5 h-5" /><input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} placeholder="Where do you want to go?" className="w-full bg-[var(--surface-1)] rounded-xl border border-white/10 py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)]" /></form>
            <LocationSelector onLocationSelect={handleLocationSelect} />
            {selectedLocation && <p className="mt-3 text-sm text-gray-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-[var(--accent)]" /> Exploring from <span className="text-white">{selectedLocation.name}</span></p>}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.38 }} className="mt-5 flex flex-wrap items-center gap-3"><Link to="/destinations" className="btn-primary">Explore destinations <ArrowRight className="w-4 h-4" /></Link><Link to="/planner" className="btn-ghost">Plan with AI <Sparkles className="w-4 h-4" /></Link></motion.div>
          <motion.div {...reveal} className="mt-10 max-w-4xl editorial-rule pt-4 flex flex-col sm:flex-row gap-3 justify-between text-xs uppercase tracking-[.16em] text-white/65"><span>Scroll to discover</span><span className="flex items-center gap-2">TravelAI / 2026 <ArrowDownRight className="w-4 h-4 text-[var(--accent)]" /></span></motion.div>
        </div>
      </section>

      <section className="page-shell pb-28 sm:pb-40"><motion.div {...reveal} className="flex items-end justify-between mb-10"><div><p className="section-kicker mb-5">The edit</p><h2 className="text-5xl sm:text-7xl text-white leading-none">Places that<br /><span className="text-[var(--accent)]">stay with you.</span></h2></div><Link to="/destinations" className="hidden sm:flex items-center gap-2 text-sm uppercase tracking-[.14em] text-white hover:text-[var(--accent)]">View all <ArrowRight className="w-4 h-4" /></Link></motion.div><div className="grid lg:grid-cols-[1.35fr_.65fr] gap-6 items-start"><DestinationCard destination={featured[0]} index={0} /><div className="grid gap-6 pt-0 lg:pt-20">{featured.slice(1).map((destination, index) => <DestinationCard key={destination.id} destination={destination} index={index + 1} />)}</div></div></section>

      <section className="bg-[var(--surface-2)] py-24 sm:py-36"><div className="page-shell"><motion.div {...reveal} className="grid lg:grid-cols-[.85fr_1.15fr] gap-12 items-center"><div><p className="section-kicker mb-5">Travel, reimagined</p><h2 className="text-5xl sm:text-7xl text-white leading-[.9] mb-8">Less planning.<br /><span className="text-[var(--accent)]">More presence.</span></h2><p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">TravelAI brings inspiration, practical insight, and a deeply personal itinerary into one calm, considered experience.</p><Link to="/about" className="btn-ghost">Our approach <ArrowRight className="w-4 h-4" /></Link></div><div className="grid grid-cols-[1.15fr_.85fr] gap-4 items-end"><motion.img whileHover={{ y: -8 }} src={storyImages[0]} alt="Traveller looking at a landscape" className="w-full aspect-[.78] object-cover rounded-[2rem]" /><motion.img whileHover={{ y: -8 }} src={storyImages[1]} alt="Coastal road" className="w-full aspect-[.82] object-cover rounded-[2rem] mb-12" /></div></motion.div></div></section>

      <section className="page-shell py-24 sm:py-36"><motion.div {...reveal} className="grid sm:grid-cols-3 gap-10 border-y border-white/10 py-10"><div><Compass className="text-[var(--accent)] w-7 h-7 mb-5" /><p className="eyebrow mb-2">01 / Discover</p><h3 className="text-2xl text-white">A world worth wandering</h3></div><div><Calendar className="text-[var(--accent)] w-7 h-7 mb-5" /><p className="eyebrow mb-2">02 / Shape</p><h3 className="text-2xl text-white">Plans with room to breathe</h3></div><div><Globe2 className="text-[var(--accent)] w-7 h-7 mb-5" /><p className="eyebrow mb-2">03 / Go</p><h3 className="text-2xl text-white">The confidence to begin</h3></div></motion.div></section>
    </div>
  );
}

export default Home;
