import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

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
  const chunks = content.split("\n\n").filter(c => c.trim().length > 0);
  
  // Instantly mark reading as complete since we show everything at once now
  useEffect(() => {
    onReadingComplete();
  }, [onReadingComplete]);

  return (
    <div className="space-y-6">
      {chunks.map((chunk, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.08, 0.5), ease: "easeOut" }}
          className="prose-lesson"
        >
          {parseParagraph(chunk)}
        </motion.div>
      ))}
    </div>
  );
}
