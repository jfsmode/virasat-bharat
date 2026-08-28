import React, { useState, useMemo } from 'react';
import indiaMap from '@svg-maps/india';
import { MapPin, Search, Sparkles, Filter, ChevronRight, Compass, Building2, BookOpen } from 'lucide-react';
import { allIndiaEntities } from '../data/allStatesRegistry';
import { RegionZone } from '../types';

interface InteractiveMapProps {
  selectedStateId: string;
  onSelectState: (stateId: string) => void;
  onNavigateToArchive: (stateId: string) => void;
}

interface MapNode {
  id: string;
  name: string;
  cx: number; // SVG viewBox X coordinate (0 to 612)
  cy: number; // SVG viewBox Y coordinate (0 to 696)
  zone: RegionZone;
  type: 'State' | 'Union Territory';
}

const codeToAppId: Record<string, string> = {
  'an': 'andaman-nicobar',
  'ap': 'andhra-pradesh',
  'ar': 'arunachal-pradesh',
  'as': 'assam',
  'br': 'bihar',
  'ch': 'chandigarh',
  'ct': 'chhattisgarh',
  'dn': 'dadra-nagar-haveli-daman-diu',
  'dd': 'dadra-nagar-haveli-daman-diu',
  'dl': 'delhi',
  'ga': 'goa',
  'gj': 'gujarat',
  'hr': 'haryana',
  'hp': 'himachal-pradesh',
  'jk': 'jammu-kashmir',
  'jh': 'jharkhand',
  'ka': 'karnataka',
  'kl': 'kerala',
  'ld': 'lakshadweep',
  'mp': 'madhya-pradesh',
  'mh': 'maharashtra',
  'mn': 'manipur',
  'ml': 'meghalaya',
  'mz': 'mizoram',
  'nl': 'nagaland',
  'or': 'odisha',
  'py': 'puducherry',
  'pb': 'punjab',
  'rj': 'rajasthan',
  'sk': 'sikkim',
  'tn': 'tamil-nadu',
  'tg': 'telangana',
  'tr': 'tripura',
  'up': 'uttar-pradesh',
  'ut': 'uttarakhand',
  'wb': 'west-bengal'
};

const indiaMapNodes: MapNode[] = [
  // --- NORTH ZONE & NORTH UTS ---
  { id: 'ladakh', name: 'Ladakh', cx: 205.0, cy: 48.0, zone: 'North', type: 'Union Territory' },
  { id: 'jammu-kashmir', name: 'Jammu & Kashmir', cx: 145.0, cy: 75.0, zone: 'North', type: 'Union Territory' },
  { id: 'himachal-pradesh', name: 'Himachal Pradesh', cx: 190.5, cy: 133.0, zone: 'North', type: 'State' },
  { id: 'punjab', name: 'Punjab', cx: 151.0, cy: 151.6, zone: 'North', type: 'State' },
  { id: 'chandigarh', name: 'Chandigarh', cx: 179.5, cy: 159.9, zone: 'Union Territory', type: 'Union Territory' },
  { id: 'uttarakhand', name: 'Uttarakhand', cx: 232.5, cy: 175.3, zone: 'North', type: 'State' },
  { id: 'haryana', name: 'Haryana', cx: 164.2, cy: 194.5, zone: 'North', type: 'State' },
  { id: 'delhi', name: 'Delhi', cx: 186.3, cy: 210.4, zone: 'Union Territory', type: 'Union Territory' },
  { id: 'uttar-pradesh', name: 'Uttar Pradesh', cx: 265.3, cy: 244.9, zone: 'North', type: 'State' },

  // --- WEST ZONE & WEST UTS ---
  { id: 'rajasthan', name: 'Rajasthan', cx: 119.0, cy: 256.8, zone: 'West', type: 'State' },
  { id: 'gujarat', name: 'Gujarat', cx: 65.9, cy: 354.9, zone: 'West', type: 'State' },
  { id: 'dadra-nagar-haveli-daman-diu', name: 'DNH & Daman Diu', cx: 95.0, cy: 402.0, zone: 'Union Territory', type: 'Union Territory' },
  { id: 'maharashtra', name: 'Maharashtra', cx: 179.7, cy: 435.3, zone: 'West', type: 'State' },
  { id: 'goa', name: 'Goa', cx: 121.9, cy: 512.1, zone: 'West', type: 'State' },

  // --- CENTRAL ZONE ---
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', cx: 214.3, cy: 319.0, zone: 'Central', type: 'State' },
  { id: 'chhattisgarh', name: 'Chhattisgarh', cx: 295.8, cy: 387.8, zone: 'Central', type: 'State' },

  // --- EAST ZONE ---
  { id: 'bihar', name: 'Bihar', cx: 368.8, cy: 274.9, zone: 'East', type: 'State' },
  { id: 'jharkhand', name: 'Jharkhand', cx: 365.5, cy: 326.8, zone: 'East', type: 'State' },
  { id: 'west-bengal', name: 'West Bengal', cx: 405.0, cy: 330.0, zone: 'East', type: 'State' },
  { id: 'odisha', name: 'Odisha', cx: 340.1, cy: 405.2, zone: 'East', type: 'State' },

  // --- NORTH-EAST ZONE ---
  { id: 'sikkim', name: 'Sikkim', cx: 424.6, cy: 235.1, zone: 'North-East', type: 'State' },
  { id: 'assam', name: 'Assam', cx: 516.4, cy: 271.1, zone: 'North-East', type: 'State' },
  { id: 'arunachal-pradesh', name: 'Arunachal Pradesh', cx: 550.4, cy: 224.1, zone: 'North-East', type: 'State' },
  { id: 'meghalaya', name: 'Meghalaya', cx: 484.1, cy: 282.7, zone: 'North-East', type: 'State' },
  { id: 'nagaland', name: 'Nagaland', cx: 546.4, cy: 269.9, zone: 'North-East', type: 'State' },
  { id: 'manipur', name: 'Manipur', cx: 537.5, cy: 301.4, zone: 'North-East', type: 'State' },
  { id: 'mizoram', name: 'Mizoram', cx: 516.3, cy: 336.6, zone: 'North-East', type: 'State' },
  { id: 'tripura', name: 'Tripura', cx: 493.2, cy: 325.1, zone: 'North-East', type: 'State' },

  // --- SOUTH ZONE & SOUTH UTS ---
  { id: 'telangana', name: 'Telangana', cx: 237.1, cy: 456.6, zone: 'South', type: 'State' },
  { id: 'andhra-pradesh', name: 'Andhra Pradesh', cx: 263.2, cy: 499.8, zone: 'South', type: 'State' },
  { id: 'karnataka', name: 'Karnataka', cx: 170.6, cy: 518.7, zone: 'South', type: 'State' },
  { id: 'puducherry', name: 'Puducherry', cx: 252.0, cy: 555.0, zone: 'Union Territory', type: 'Union Territory' },
  { id: 'tamil-nadu', name: 'Tamil Nadu', cx: 211.4, cy: 609.5, zone: 'South', type: 'State' },
  { id: 'kerala', name: 'Kerala', cx: 166.3, cy: 615.2, zone: 'South', type: 'State' },

  // --- ISLAND UNION TERRITORIES ---
  { id: 'lakshadweep', name: 'Lakshadweep', cx: 98.8, cy: 627.2, zone: 'Union Territory', type: 'Union Territory' },
  { id: 'andaman-nicobar', name: 'Andaman & Nicobar', cx: 521.1, cy: 608.7, zone: 'Union Territory', type: 'Union Territory' }
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  selectedStateId,
  onSelectState,
  onNavigateToArchive
}) => {
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const zones = ['All', 'North', 'South', 'East', 'West', 'Central', 'North-East', 'Union Territory'];

  const filteredEntities = useMemo(() => {
    return allIndiaEntities.filter(entity => {
      const matchesZone = selectedZone === 'All'
        ? true
        : selectedZone === 'Union Territory'
          ? entity.type === 'Union Territory'
          : entity.zone === selectedZone;

      const matchesSearch = searchQuery === '' ||
        entity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entity.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entity.nativeName.includes(searchQuery) ||
        entity.iconicItem.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesZone && matchesSearch;
    });
  }, [selectedZone, searchQuery]);

  const activeEntity = useMemo(() => {
    const idToFind = hoveredNodeId || selectedStateId;
    return allIndiaEntities.find(e => e.id === idToFind) || allIndiaEntities[0];
  }, [hoveredNodeId, selectedStateId]);

  return (
    <section id="interactive-map" className="py-20 sm:py-24 bg-[#faf7f2] relative overflow-hidden border-b border-[#ebdcc7]">
      {/* Background Heritage Canvas Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#f9e9d9] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#f5e3d0] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-[#8c5225] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#b8501c]" />
            <span>Official Sovereign Living Atlas</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23170f] tracking-tight">
            Discover the India Within India
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5e4d3f] font-light leading-relaxed">
            From the Himalayan crown of Ladakh and Kashmir to Kanyakumari, and from the salt flats of Kutch to the dawn-lit mountains of Arunachal Pradesh—explore all 28 States & 8 Union Territories.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white border border-[#e8decb] rounded-3xl p-4 sm:p-5 mb-10 shadow-[0_4px_20px_rgba(70,40,15,0.04)]">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Zone Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs font-semibold text-[#7c6958] mr-1 hidden sm:inline-flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#b8501c]" /> Zones:
              </span>
              {zones.map(z => (
                <button
                  key={z}
                  onClick={() => setSelectedZone(z)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedZone === z
                      ? 'bg-[#b8501c] text-white shadow-xs'
                      : 'bg-[#faf6ee] text-[#5d4c3f] hover:bg-[#f2e7d8] hover:text-[#23170f] border border-[#e8decb]'
                  }`}
                >
                  {z}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#8c7a6b] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search state, craft, capital..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#faf6ee] border border-[#e2d5c3] rounded-full text-[#23170f] placeholder-[#8c7a6b] focus:outline-none focus:border-[#b8501c] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Interactive Map + Spotlight Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Visual Interactive Digital Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#e8decb] rounded-3xl p-5 sm:p-7 relative min-h-[540px] sm:min-h-[640px] shadow-[0_6px_25px_rgba(70,40,15,0.05)] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#ebdcc7] pb-4">
              <div>
                <h3 className="font-cinzel text-lg font-bold text-[#23170f] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#b8501c]" />
                  Cartographic Cultural Navigator
                </h3>
                <p className="text-xs text-[#7c6958]">Interactive vector map with all 36 States & Union Territories</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#f4ebd9] text-[#8c5225] border border-[#e2cca8] font-semibold">
                {filteredEntities.length} Regions Active
              </span>
            </div>

            {/* Map Canvas with Vector Outlines for all 36 States & UTs */}
            <div className="relative w-full max-w-[500px] mx-auto aspect-[612/696] my-auto flex items-center justify-center select-none py-2">
              <svg
                viewBox={indiaMap.viewBox || "0 0 612 696"}
                className="w-full h-full drop-shadow-sm"
                aria-label="Accurate Map of India"
              >
                <defs>
                  <linearGradient id="indiaStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fdf8f2" />
                    <stop offset="50%" stopColor="#faefe0" />
                    <stop offset="100%" stopColor="#f4e4cd" />
                  </linearGradient>

                  <linearGradient id="selectedStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c2410c" />
                    <stop offset="100%" stopColor="#9a3412" />
                  </linearGradient>

                  <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#b8501c" floodOpacity="0.2" />
                  </filter>
                </defs>

                {/* Regional Ambient Grid Lines */}
                <g opacity="0.12" stroke="#8c5225" strokeWidth="0.5" strokeDasharray="4,4">
                  <line x1="50" y1="150" x2="560" y2="150" />
                  <line x1="50" y1="300" x2="560" y2="300" />
                  <line x1="50" y1="450" x2="560" y2="450" />
                  <line x1="50" y1="600" x2="560" y2="600" />
                  <line x1="150" y1="50" x2="150" y2="650" />
                  <line x1="300" y1="50" x2="300" y2="650" />
                  <line x1="450" y1="50" x2="450" y2="650" />
                </g>

                {/* 36 Vector Paths for all States & UTs */}
                <g filter="url(#softGlow)">
                  {indiaMap.locations.map(location => {
                    const appId = codeToAppId[location.id] || location.id;
                    const isSelected = selectedStateId === appId;
                    const isHovered = hoveredNodeId === appId;
                    const isFilteredOut = filteredEntities.length > 0 && !filteredEntities.some(e => e.id === appId);

                    return (
                      <path
                        key={location.id}
                        id={`state-path-${location.id}`}
                        d={location.path}
                        fill={
                          isSelected
                            ? '#b8501c'
                            : isHovered
                              ? '#ea580c'
                              : isFilteredOut
                                ? '#f3ede5'
                                : 'url(#indiaStateGrad)'
                        }
                        stroke={isSelected ? '#7c2d12' : isHovered ? '#7c2d12' : '#c27e56'}
                        strokeWidth={isSelected ? '2' : isHovered ? '1.8' : '1'}
                        strokeLinejoin="round"
                        className="transition-all duration-300 cursor-pointer"
                        onClick={() => onSelectState(appId)}
                        onMouseEnter={() => setHoveredNodeId(appId)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                      >
                        <title>{location.name}</title>
                      </path>
                    );
                  })}
                </g>

                {/* Water Body Labels */}
                <text x="35" y="470" fill="#a0724a" fontSize="13" fontStyle="italic" opacity="0.6" fontFamily="serif">Arabian Sea</text>
                <text x="440" y="480" fill="#a0724a" fontSize="13" fontStyle="italic" opacity="0.6" fontFamily="serif">Bay of Bengal</text>
                <text x="210" y="670" fill="#a0724a" fontSize="13" fontStyle="italic" opacity="0.6" fontFamily="serif">Indian Ocean</text>

                {/* Precision Interactive SVG Region Markers & Pins for all 36 States & UTs */}
                <g className="pins-layer">
                  {indiaMapNodes.map(node => {
                    const isSelected = selectedStateId === node.id;
                    const isHovered = hoveredNodeId === node.id;
                    const isMatchingFilter = filteredEntities.some(e => e.id === node.id);
                    const isUT = node.type === 'Union Territory';

                    return (
                      <g
                        key={node.id}
                        id={`map-pin-${node.id}`}
                        className="cursor-pointer transition-opacity duration-300"
                        opacity={!isMatchingFilter ? 0.25 : 1}
                        onClick={() => onSelectState(node.id)}
                        onMouseEnter={() => setHoveredNodeId(node.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        tabIndex={0}
                        role="button"
                        aria-label={`Select ${node.name}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onSelectState(node.id);
                          }
                        }}
                      >
                        {/* Subtle drop shadow under pin */}
                        <circle
                          cx={node.cx}
                          cy={node.cy + 1}
                          r={isSelected || isHovered ? 8.5 : isUT ? 5.5 : 6.5}
                          fill="rgba(40, 20, 10, 0.2)"
                        />

                        {/* Main Pin Outer Circle */}
                        <circle
                          cx={node.cx}
                          cy={node.cy}
                          r={isSelected || isHovered ? 8 : isUT ? 5 : 6}
                          fill={
                            isSelected
                              ? '#b8501c'
                              : isHovered
                              ? '#d97706'
                              : isUT
                              ? '#f4ebd9'
                              : '#ffffff'
                          }
                          stroke={
                            isSelected
                              ? '#ffffff'
                              : isHovered
                              ? '#ffffff'
                              : isUT
                              ? '#8c5225'
                              : '#b8501c'
                          }
                          strokeWidth={isSelected || isHovered ? '2.2' : '1.8'}
                          className="transition-all duration-200"
                        />

                        {/* Pin Inner Core Dot */}
                        <circle
                          cx={node.cx}
                          cy={node.cy}
                          r={isSelected || isHovered ? 3.5 : isUT ? 2 : 2.2}
                          fill={
                            isSelected
                              ? '#ffffff'
                              : isHovered
                              ? '#ffffff'
                              : isUT
                              ? '#8c5225'
                              : '#b8501c'
                          }
                        />

                        {/* Tooltip Label on Hover / Selection */}
                        {(isSelected || isHovered) && (
                          <g
                            transform={`translate(${node.cx}, ${node.cy - 14})`}
                            className="pointer-events-none"
                          >
                            <rect
                              x={-Math.max(node.name.length * 3.8 + 12, 36)}
                              y="-20"
                              width={Math.max(node.name.length * 7.6 + 24, 72)}
                              height="20"
                              rx="5"
                              fill="#23170f"
                              stroke="#c27e56"
                              strokeWidth="0.8"
                              filter="url(#softGlow)"
                            />
                            <polygon
                              points="-4,-0.5 4,-0.5 0,3.5"
                              fill="#23170f"
                            />
                            <text
                              x="0"
                              y="-6.5"
                              fill="#ffffff"
                              fontSize="10"
                              fontWeight="bold"
                              fontFamily="system-ui, sans-serif"
                              textAnchor="middle"
                            >
                              {node.name} {isUT ? '(UT)' : ''}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* Map Legend Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#7c6958] border-t border-[#ebdcc7] pt-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b8501c] border border-white"></span> Selected Region
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-[#b8501c]"></span> 28 States
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e2cca8] border border-[#8c5225]"></span> 8 UTs
                </span>
              </div>
              <span className="text-[#b8501c] font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Tap any state or pin to preview heritage
              </span>
            </div>
          </div>

          {/* Active State Cultural Spotlight Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#e8decb] rounded-3xl overflow-hidden shadow-[0_6px_25px_rgba(70,40,15,0.05)] sticky top-24">
            <div className="relative h-56 overflow-hidden">
              <img
                src={activeEntity.image}
                alt={activeEntity.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/95 via-[#23170f]/40 to-transparent"></div>
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-black/60 text-white backdrop-blur-xs">
                  {activeEntity.type}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#b8501c] text-white">
                  {activeEntity.zone} Zone
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4">
                <div className="text-orange-200 text-xs font-semibold mb-0.5">
                  {activeEntity.nativeName}
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activeEntity.name}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                  <Building2 className="w-4 h-4 text-[#b8501c] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#7c6958] font-semibold">Administrative Capital</div>
                    <div className="text-sm font-medium text-[#23170f]">{activeEntity.capital}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                  <Sparkles className="w-4 h-4 text-[#b8501c] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#7c6958] font-semibold">Iconic Heritage Craft / Monument</div>
                    <div className="text-sm font-medium text-[#b8501c] font-semibold">{activeEntity.iconicItem}</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5e4d3f] leading-relaxed font-light italic bg-[#fdf8f0] p-4 rounded-2xl border border-[#ebdcc7]">
                  "{activeEntity.shortFact}"
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    id="enter-archive-spotlight-btn"
                    onClick={() => onNavigateToArchive(activeEntity.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#b8501c] hover:bg-[#a04214] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Open Grandma's Archive ({activeEntity.name})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All States & UTs Grid Card Explorer */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#23170f]">
                All 28 States & 8 Union Territories
              </h3>
              <p className="text-xs sm:text-sm text-[#7c6958]">Explore authentic recipes, architectural marvels, master craftsmanship & oral folk traditions</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-[#f4ebd9] text-[#8c5225] border border-[#e2cca8] font-semibold">
              Showing {filteredEntities.length} of 36 Regions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredEntities.map(entity => {
              const isSelected = selectedStateId === entity.id;
              return (
                <div
                  key={entity.id}
                  id={`state-card-${entity.id}`}
                  onClick={() => {
                    onSelectState(entity.id);
                    onNavigateToArchive(entity.id);
                  }}
                  className={`group relative rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer bg-white ${
                    isSelected
                      ? 'border-[#b8501c] ring-2 ring-[#b8501c]/30 shadow-lg -translate-y-1'
                      : 'border-[#e8decb] hover:border-[#b8501c]/60 hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  <div className="h-36 relative overflow-hidden bg-[#faf6ee]">
                    <img
                      src={entity.image}
                      alt={entity.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/85 via-[#23170f]/20 to-transparent"></div>
                    <div className="absolute top-2.5 right-2.5 flex gap-1">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
                        {entity.type === 'Union Territory' ? 'UT' : 'State'}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#b8501c] text-white">
                        {entity.zone}
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-3 right-3 text-white">
                      <div className="text-[10px] text-orange-200 font-medium">
                        {entity.nativeName}
                      </div>
                      <h4 className="font-cinzel text-base font-bold text-white group-hover:text-orange-300 transition-colors leading-snug">
                        {entity.name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="text-[11px] text-[#7c6958] flex items-center justify-between mb-1">
                      <span className="font-medium">Capital: {entity.capital}</span>
                    </div>
                    <p className="text-xs font-medium line-clamp-1 text-[#b8501c]">
                      ✨ {entity.iconicItem}
                    </p>

                    <div className="mt-3.5 pt-3 border-t border-[#ebdcc7]/60 flex items-center justify-between text-xs text-[#b8501c] font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Explore Archive</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


