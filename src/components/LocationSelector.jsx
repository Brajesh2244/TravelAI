import { useState } from "react";
import { MapPin, Navigation, Search, Loader2 } from "lucide-react";
import { getCurrentLocation } from "../services/locationService";

const LocationSelector = ({ onLocationSelect }) => {
  const [locationInput, setLocationInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCurrentLocation = async () => {
    setLoading(true);
    setError("");

    try {
      const location = await getCurrentLocation();

      setLocationInput(location.name);

      if (onLocationSelect) {
        onLocationSelect(location);
      }
    } catch (err) {
      setError(err.message || "Failed to get your location.");
    } finally {
      setLoading(false);
    }
  };

  const handleManualLocation = () => {
    if (!locationInput.trim()) return;

    const location = {
      name: locationInput.trim(),
      city: locationInput.trim(),
      state: "",
      country: "",
      latitude: null,
      longitude: null,
    };

    if (onLocationSelect) {
      onLocationSelect(location);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleManualLocation();
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Manual Location Input */}
        <div className="relative flex-1">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--accent)]" />

          <input
            type="text"
            value={locationInput}
            onChange={(e) => {
              setLocationInput(e.target.value);
              setError("");
            }}
            onKeyDown={handleKeyDown}
            placeholder="Enter city or destination"
            className="w-full pl-12 pr-4 py-3 bg-[var(--surface-2)] border border-[var(--surface-3)] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>

        {/* Search / Select Button */}
        <button
          type="button"
          onClick={handleManualLocation}
          disabled={!locationInput.trim()}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-[var(--surface-3)] border border-[var(--surface-4)] text-white rounded-xl hover:border-[var(--accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Search className="w-4 h-4" />
          Select
        </button>

        {/* Current Location Button */}
        <button
          type="button"
          onClick={handleCurrentLocation}
          disabled={loading}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-[var(--accent)] text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Detecting...
            </>
          ) : (
            <>
              <Navigation className="w-4 h-4" />
              Use My Location
            </>
          )}
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default LocationSelector;
