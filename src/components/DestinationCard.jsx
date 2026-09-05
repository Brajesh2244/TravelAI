import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getDestinationImage } from '../services/imageService';

const DestinationCard = ({ destination, index }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const url = await getDestinationImage(destination.name);
      setImageUrl(url);
      setLoading(false);
    };
    loadImage();
  }, [destination.name]);

  const fallbackImage = `https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative surface-card rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-[var(--accent)]/50 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-3)] relative">
        {loading ? (
          <div className="w-full h-full animate-pulse bg-[var(--surface-4)]" />
        ) : (
          <img
            src={imageUrl || fallbackImage}
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <span className="absolute left-5 bottom-4 text-xs tracking-[0.16em] uppercase text-white/75">{destination.continent}</span>
      </div>

      <div className="p-6">
        <div className="flex items-center text-[var(--accent)] text-xs uppercase tracking-[0.14em] mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{destination.country}</span>
        </div>

        <h3 className="text-3xl font-semibold text-white mb-2">{destination.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{destination.description}</p>

        <Link
          to={`/destination/${destination.slug}`}
          className="inline-flex items-center text-[var(--accent)] hover:text-white transition-colors group/link"
        >
          <span className="text-sm font-medium">Explore</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
