import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder = "Search destinations..." }) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 bg-[var(--surface-3)] border border-[var(--surface-4)] rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)] transition-colors"
      />
    </div>
  );
};

export default SearchBar;
