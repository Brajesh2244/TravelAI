export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const locationDetails = await getLocationDetails(latitude, longitude);

          resolve({
            latitude,
            longitude,
            ...locationDetails,
          });
        } catch {
          // Even if reverse geocoding fails, coordinates are still useful
          resolve({
            latitude,
            longitude,
            name: "Current Location",
            city: "",
            state: "",
            country: "",
          });
        }
      },
      (error) => {
        let message = "Unable to get your location.";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            message =
              "Location permission was denied. Please allow location access in your browser.";
            break;

          case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
            break;

          case error.TIMEOUT:
            message = "Location request timed out. Please try again.";
            break;

          default:
            message = "An unknown error occurred while getting your location.";
        }

        reject(new Error(message));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      },
    );
  });
};

export const getLocationDetails = async (latitude, longitude) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
  );

  if (!response.ok) {
    throw new Error("Failed to get location details.");
  }

  const data = await response.json();

  const address = data.address || {};

  const city =
    address.city ||
    address.town ||
    address.village ||
    address.municipality ||
    address.county ||
    "";

  const state = address.state || "";

  const country = address.country || "";

  const name = [city, state, country].filter(Boolean).join(", ");

  return {
    name: name || data.display_name || "Current Location",
    city,
    state,
    country,
    displayName: data.display_name || name,
  };
};
