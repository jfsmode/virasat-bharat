import React from 'react';
import { ChevronRight, ArrowLeft, LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge: string;
  icon: LucideIcon;
  onBackToHome: () => void;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  icon: Icon,
  onBackToHome,
  actions
}) => {
  return (
    <div className="bg-[#f5ede2]/80 dark:bg-[#150e09]/80 border-b border-[#ebdcc7] dark:border-[#2d1c12] py-8 sm:py-10 relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fdecdb]/40 dark:bg-[#2a170e]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-[#7a6757] dark:text-[#a39180]">
            <button
              onClick={onBackToHome}
              className="hover:text-[#b8501c] dark:hover:text-[#e0753d] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#a89684]" />
            <span className="text-[#b8501c] dark:text-[#e0753d] font-semibold">{title}</span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 dark:bg-[#20150e]/80 hover:bg-white dark:hover:bg-[#261a12] text-[#554335] dark:text-[#cbbab0] border border-[#e2cca8] dark:border-[#3d2719] transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>
        </div>

        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faebd7] dark:bg-[#261a12] border border-[#e2cca8] dark:border-[#3d2719] text-[#8c5225] dark:text-[#e0753d] text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Icon className="w-3.5 h-3.5 text-[#b8501c] dark:text-[#e0753d]" />
              <span>{badge}</span>
            </div>
            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#23170f] dark:text-[#f8f1e7] tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#5e4c3d] dark:text-[#bda897] font-light max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {actions && (
            <div className="flex items-center gap-2 shrink-0">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
