import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Sparkles,
  MapPin,
  CalendarDays,
  Wallet,
  Heart,
  Plane,
  Loader2,
  AlertCircle,
  RotateCcw,
} from "lucide-react";

import { generateItinerary } from "../services/geminiService";

function Planner() {
  const [searchParams] = useSearchParams();

  const destinationFromUrl = searchParams.get("destination") || "";

  const [destination, setDestination] = useState(destinationFromUrl);
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState("Medium");
  const [travelStyle, setTravelStyle] = useState("Balanced");
  const [interests, setInterests] = useState([]);

  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const interestOptions = [
    "Culture",
    "Food",
    "Adventure",
    "Nature",
    "Shopping",
    "Nightlife",
    "History",
    "Photography",
  ];

  const handleInterestToggle = (interest) => {
    setInterests((previous) =>
      previous.includes(interest)
        ? previous.filter((item) => item !== interest)
        : [...previous, interest],
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setItinerary("");

    if (!destination.trim()) {
      setError("Please enter a destination.");
      return;
    }

    if (interests.length === 0) {
      setError("Please select at least one travel interest.");
      return;
    }

    try {
      setLoading(true);

      const result = await generateItinerary(
        destination,
        days,
        budget,
        interests,
        travelStyle,
      );

      setItinerary(result);
    } catch (error) {
      console.error(error);

      setError(
        error.message || "Unable to generate your itinerary. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const resetPlanner = () => {
    setDestination("");
    setDays(3);
    setBudget("Medium");
    setTravelStyle("Balanced");
    setInterests([]);
    setItinerary("");
    setError("");
  };

  return (
    <div className="planner-page min-h-screen pt-28 pb-20 bg-[var(--surface-1)]">
      <div className="page-shell">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-3)] border border-[var(--surface-4)] mb-5">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />

            <span className="text-sm text-gray-600">
              AI Powered Travel Planning
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-[0.95]">
            Create Your Perfect{" "}
            <span className="text-[var(--accent)]">Trip with AI</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Tell us where you want to go and what you love. Our AI will create a
            personalized day-by-day travel itinerary for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* PLANNER FORM */}
          <div className="surface-card rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Plan Your Journey
                </h2>

                <p className="text-gray-600 text-sm mt-1">
                  Customize your travel preferences.
                </p>
              </div>

              <Plane className="w-8 h-8 text-[var(--accent)]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* DESTINATION */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <MapPin className="w-4 h-4 text-[var(--accent)]" />
                  Destination
                </label>

                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Example: Paris, Tokyo, Goa..."
                  className="w-full px-4 py-3 bg-[var(--surface-1)] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition"
                />
              </div>

              {/* DAYS */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <CalendarDays className="w-4 h-4 text-[var(--accent)]" />
                  Number of Days
                </label>

                <select
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-[var(--surface-1)] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 10, 14].map((day) => (
                    <option key={day} value={day}>
                      {day} {day === 1 ? "Day" : "Days"}
                    </option>
                  ))}
                </select>
              </div>

              {/* BUDGET */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-700 mb-3">
                  <Wallet className="w-4 h-4 text-[var(--accent)]" />
                  Budget Level
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {["Budget", "Medium", "Luxury"].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setBudget(item)}
                      className={`py-3 rounded-xl text-sm font-medium border transition ${
                        budget === item
                          ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                          : "bg-[var(--surface-1)] text-gray-300 border-white/10 hover:border-[var(--accent)]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* TRAVEL STYLE */}
              <div>
                <label className="text-sm text-gray-300 block mb-3">
                  Travel Style
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {["Relaxed", "Balanced", "Fast-Paced"].map((style) => (
                    <button
                      type="button"
                      key={style}
                      onClick={() => setTravelStyle(style)}
                      className={`py-3 rounded-xl text-sm font-medium border transition ${
                        travelStyle === style
                          ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                          : "bg-[var(--surface-1)] text-gray-300 border-white/10 hover:border-[var(--accent)]"
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* INTERESTS */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                  <Heart className="w-4 h-4 text-[var(--accent)]" />
                  What interests you?
                </label>

                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((interest) => (
                    <button
                      type="button"
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-4 py-2 rounded-full text-sm transition border ${
                        interests.includes(interest)
                          ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                          : "bg-[var(--surface-1)] text-gray-300 border-white/10 hover:border-[var(--accent)]"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-600 p-4 rounded-xl text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {error}
                </div>
              )}

              {/* GENERATE BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] text-black py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating Your Itinerary...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate AI Itinerary
                  </>
                )}
              </button>
            </form>
          </div>

          {/* AI RESULT */}
          <div className="lg:sticky lg:top-28">
            {loading ? (
              <div className="surface-card rounded-3xl p-8 min-h-[500px] flex flex-col items-center justify-center text-center">
                <Loader2 className="w-12 h-12 text-[var(--accent)] animate-spin mb-5" />

                <h3 className="text-xl font-semibold text-white mb-2">
                  AI is Planning Your Journey
                </h3>

                <p className="text-gray-400">
                  Creating a personalized itinerary based on your preferences...
                </p>
              </div>
            ) : itinerary ? (
              <div className="surface-card rounded-3xl overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-[var(--surface-3)]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-5 h-5 text-[var(--accent)]" />

                      <h2 className="text-2xl font-bold text-white">
                        Your AI Itinerary
                      </h2>
                    </div>

                    <p className="text-sm text-gray-400">
                      Personalized for {destination}
                    </p>
                  </div>

                  <button
                    onClick={resetPlanner}
                    className="p-2 text-gray-500 hover:text-[var(--accent)] transition"
                    title="Reset planner"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 max-h-[650px] overflow-y-auto">
                  <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {itinerary}
                  </div>
                </div>
              </div>
            ) : (
              <div className="surface-card rounded-3xl p-8 min-h-[500px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--surface-3)] flex items-center justify-center mb-6">
                  <Sparkles className="w-10 h-10 text-[var(--accent)]" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Your Adventure Starts Here
                </h3>

                <p className="text-gray-400 max-w-sm">
                  Fill in your travel preferences and let AI create a
                  personalized itinerary just for you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planner;
