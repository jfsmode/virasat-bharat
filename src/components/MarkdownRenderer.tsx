import React from 'react';
import Markdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  isUser?: boolean;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  isUser = false,
  className = ''
}) => {
  return (
    <div className={`text-inherit leading-relaxed ${className}`}>
      <Markdown
        components={{
          p: ({ children }) => (
            <p className="mb-2 last:mb-0 leading-relaxed text-inherit">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className={`font-semibold ${isUser ? 'text-white' : 'text-[#8c5225] dark:text-[#f3b584]'}`}>
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-inherit">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-4 sm:pl-5 my-2 space-y-1 text-inherit">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-4 sm:pl-5 my-2 space-y-1 text-inherit">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed pl-0.5 text-inherit">{children}</li>
          ),
          h1: ({ children }) => (
            <h1 className={`text-sm sm:text-base font-bold my-2 ${isUser ? 'text-white' : 'text-[#8c5225] dark:text-[#f3b584]'}`}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className={`text-xs sm:text-sm font-bold my-1.5 ${isUser ? 'text-white' : 'text-[#8c5225] dark:text-[#f3b584]'}`}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={`text-xs sm:text-sm font-semibold my-1 ${isUser ? 'text-white' : 'text-[#8c5225] dark:text-[#f3b584]'}`}>
              {children}
            </h3>
          ),
          blockquote: ({ children }) => (
            <blockquote
              className={`border-l-2 pl-3 my-2 italic ${
                isUser
                  ? 'border-white/40 text-white/95'
                  : 'border-[#b8501c]/50 text-[#614532] dark:text-[#d3bfaf]'
              }`}
            >
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code
              className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${
                isUser
                  ? 'bg-black/20 text-white'
                  : 'bg-[#b8501c]/10 dark:bg-[#b8501c]/20 text-[#8c5225] dark:text-[#f3b584]'
              }`}
            >
              {children}
            </code>
          ),
          hr: () => (
            <hr className={`my-2.5 border-t ${isUser ? 'border-white/20' : 'border-[#ebdcc7] dark:border-[#382417]'}`} />
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};
