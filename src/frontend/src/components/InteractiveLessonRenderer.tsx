import { Button } from "@/components/ui/button";
import { ChevronDown, User, MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useMemo } from "react";

function parseParagraph(text: string) {
  // Check for scenario callouts first
  const calloutPrefixes = [
    "Real-world context:",
    "Practical scenario:",
    "Workplace scenario:",
    "In practice:",
    "Career insight:",
    "Real-world insight:"
  ];
  
  for (const prefix of calloutPrefixes) {
    if (text.trim().startsWith(prefix)) {
      const rest = text.substring(prefix.length).trim();
      return (
        <div className="bg-amber-400/10 border border-amber-400/30 p-5 rounded-xl my-5 shadow-sm">
          <p className="font-bold text-amber-600 mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
            💡 {prefix.replace(":", "")}
          </p>
          <p className="text-foreground/90 text-[15px] leading-relaxed m-0">{rest}</p>
        </div>
      );
    }
  }

  // Look for dialogue: "Someone says: '...'"
  // We match text ending with a colon, followed by space and quotes
  const dialogueRegex = /(.*?:\s*)(["“].+?["”])(.*)/s;
  const match = text.match(dialogueRegex);
  
  if (match) {
    const [, before, quote, after] = match;
    // Only format as chat bubble if the quote is a reasonable length (not just a command in quotes)
    if (quote.length > 15) {
      return (
        <div className="space-y-4 my-6">
          {before.trim() && <p className="text-foreground/80 text-[15px]">{before.trim()}</p>}
          
          <div className="flex gap-4 items-start pl-2 sm:pl-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary shadow-sm border border-primary/20">
              🗣️
            </div>
            <div className="bg-card border border-primary/20 text-foreground px-5 py-3.5 rounded-2xl rounded-tl-sm shadow-sm relative">
              <span className="italic font-medium text-[15px] leading-relaxed text-foreground/90">
                {quote.replace(/^["“]|["”]$/g, "")}
              </span>
            </div>
          </div>
          
          {after.trim() && <p className="text-foreground/80 text-[15px]">{after.trim()}</p>}
        </div>
      );
    }
  }
  
  // Standard paragraph rendering with minor styling enhancements
  // Convert any remaining inline bolding or quotes nicely
  return <p className="text-foreground/90 leading-relaxed text-[15px] sm:text-base">{text}</p>;
}

export function InteractiveLessonRenderer({ 
  content, 
  isCompleted,
  onReadingComplete
}: { 
  content: string;
  isCompleted: boolean;
  onReadingComplete: () => void;
}) {
  const allChunks = useMemo(() => content.split("\n\n").filter(c => c.trim().length > 0), [content]);
  
  // Decide how many steps. We want at most 2 "Keep Reading" clicks.
  // step 1: initial chunks
  // step 2: first reveal
  // step 3: second reveal (final)
  const [visibleSteps, setVisibleSteps] = useState(isCompleted ? 3 : 1);
  
  const stepSize = Math.ceil(allChunks.length / 3);
  const chunksToDisplay = allChunks.slice(0, visibleSteps * stepSize);
  const hasMore = visibleSteps < 3 && chunksToDisplay.length < allChunks.length;

  useEffect(() => {
    if (!hasMore) {
      onReadingComplete();
    }
  }, [hasMore, onReadingComplete]);

  const handleNext = () => {
    setVisibleSteps(prev => prev + 1);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="space-y-6">
        {chunksToDisplay.map((chunk, i) => (
          <motion.div
            key={i}
            initial={isCompleted ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="prose-lesson"
          >
            {parseParagraph(chunk)}
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center pt-4"
        >
          <button 
            onClick={handleNext}
            className="group flex items-start gap-3 text-left max-w-xs sm:max-w-md"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="bg-primary text-primary-foreground px-5 py-3 rounded-2xl rounded-tl-none shadow-lg group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all relative">
              <p className="text-sm font-bold flex items-center gap-2">
                 Keep Reading <ChevronDown className="w-4 h-4 animate-bounce" />
              </p>
              {/* Chat bubble tail */}
              <div className="absolute -left-2 top-0 w-3 h-3 bg-primary" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            </div>
          </button>
        </motion.div>
      )}
    </div>
  );
}
