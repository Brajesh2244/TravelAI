import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getAttractionImage } from '../services/imageService';

const AttractionCard = ({ attraction, cityName, index }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const url = await getAttractionImage(attraction.name, cityName);
      setImageUrl(url);
      setLoading(false);
    };
    loadImage();
  }, [attraction.name, cityName]);

  const fallbackImage = `https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="surface-card rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-[var(--accent)]/50 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden bg-[var(--surface-3)]">
        {loading ? (
          <div className="w-full h-full animate-pulse bg-[var(--surface-4)]" />
        ) : (
          <img
            src={imageUrl || fallbackImage}
            alt={attraction.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-3 py-1 bg-[var(--surface-4)] text-[var(--accent)] text-xs rounded-full">
            {attraction.category}
          </span>
          {attraction.duration && (
            <div className="flex items-center text-gray-400 text-xs">
              <Clock className="w-3 h-3 mr-1" />
              <span>{attraction.duration}</span>
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold text-white mb-2">{attraction.name}</h3>
        <p className="text-gray-400 text-sm">{attraction.description}</p>
      </div>
    </motion.div>
  );
};

export default AttractionCard;
