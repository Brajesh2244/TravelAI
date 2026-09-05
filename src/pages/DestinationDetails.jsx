import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Wallet,
  Clock,
  MapPin,
  Sparkles,
  Navigation,
} from "lucide-react";

import { destinations } from "../data/destinations";
import { getWeatherByCoords } from "../services/weatherService";

import WeatherCard from "../components/WeatherCard";
import AttractionCard from "../components/AttractionCard";

function DestinationDetails() {
  const { slug } = useParams();

  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  const destination = destinations.find((item) => item.slug === slug);

  useEffect(() => {
    const loadWeather = async () => {
      if (!destination) return;

      setLoadingWeather(true);

      const data = await getWeatherByCoords(
        destination.coordinates.lat,
        destination.coordinates.lon,
      );

      setWeather(data);
      setLoadingWeather(false);
    };

    loadWeather();
  }, [destination]);

  if (!destination) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Destination Not Found
        </h1>

        <p className="text-gray-400 mb-6">
          The destination you are looking for does not exist.
        </p>

        <Link
          to="/destinations"
          className="px-6 py-3 bg-[var(--accent)] text-black rounded-xl font-medium"
        >
          Explore Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--accent)] mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Link>

          <div className="relative min-h-[520px] rounded-[2rem] overflow-hidden bg-[var(--surface-3)] flex items-end shadow-2xl">
            <img
              src={`https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=85`}
              alt={destination.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="relative z-10 p-8 sm:p-14 max-w-3xl">
              <div className="flex items-center gap-2 text-[var(--accent)] mb-4">
                <MapPin className="w-5 h-5" />
                <span>
                  {destination.country}, {destination.continent}
                </span>
              </div>

              <h1 className="text-6xl sm:text-8xl font-bold text-white mb-5 leading-[0.9]">
                {destination.name}
              </h1>

              <p className="text-gray-200 text-lg sm:text-xl max-w-2xl">
                {destination.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2">
              {/* QUICK INFORMATION */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                <InfoCard
                  icon={<Calendar />}
                  title="Best Time"
                  value={destination.bestTimeToVisit}
                />

                <InfoCard
                  icon={<Clock />}
                  title="Recommended Stay"
                  value={`${destination.recommendedDays} Days`}
                />

                <InfoCard
                  icon={<Wallet />}
                  title="Estimated Budget"
                  value={destination.budget}
                />
              </div>

              {/* ABOUT */}
              <div className="bg-[var(--surface-2)] border border-[var(--surface-3)] rounded-3xl p-7 mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  About {destination.name}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  {destination.overview || destination.description}
                </p>
              </div>

              {/* ATTRACTIONS */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Navigation className="w-6 h-6 text-[var(--accent)]" />

                  <h2 className="text-3xl font-bold text-white">
                    Top Attractions
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {destination.attractions?.map((attraction, index) => (
                    <AttractionCard
                      key={attraction.name}
                      attraction={attraction}
                      cityName={destination.name}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-6">
              {/* WEATHER */}
              {loadingWeather ? (
                <div className="bg-[var(--surface-3)] rounded-2xl p-6 animate-pulse">
                  <div className="h-6 bg-[var(--surface-4)] rounded w-1/2 mb-6" />
                  <div className="h-12 bg-[var(--surface-4)] rounded w-1/3" />
                </div>
              ) : (
                <WeatherCard weather={weather} />
              )}

              {/* AI PLANNER */}
              <div className="bg-[var(--surface-2)] border border-[var(--accent)]/30 rounded-2xl p-6">
                <Sparkles className="w-8 h-8 text-[var(--accent)] mb-4" />

                <h3 className="text-xl font-bold text-white mb-3">
                  Plan Your Trip with AI
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  Let TravelAI create a personalized itinerary for your trip to{" "}
                  {destination.name}.
                </p>

                <Link
                  to={`/planner?destination=${destination.name}`}
                  className="block text-center bg-[var(--accent)] text-black py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  Create My Itinerary
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* SMALL REUSABLE INFO CARD */

function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-[var(--surface-2)] border border-[var(--surface-3)] rounded-2xl p-5">
      <div className="text-[var(--accent)] mb-4">{icon}</div>

      <div className="text-sm text-gray-400 mb-1">{title}</div>

      <div className="text-white font-semibold">{value}</div>
    </div>
  );
}

export default DestinationDetails;
