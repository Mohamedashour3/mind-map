import type React from "react"
import { cn } from "@/lib/utils"

interface AppStoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: "black" | "white"
}

export function AppStoreButton({ className, variant = "black", ...props }: AppStoreButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center px-6 py-2 rounded-xl transition-transform hover:scale-105",
        variant === "black" ? "bg-black text-white" : "bg-white text-black",
        className,
      )}
      {...props}
    >
      <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.0466 12.4966C17.0266 9.53664 19.5066 8.11664 19.6166 8.04664C18.3366 6.23664 16.3266 5.96664 15.6166 5.93664C13.9166 5.76664 12.2666 6.96664 11.4066 6.96664C10.5266 6.96664 9.18663 5.95664 7.76663 5.98664C5.88663 6.01664 4.14663 7.08664 3.21663 8.74664C1.29663 12.1166 2.71663 17.1066 4.57663 19.9966C5.49663 21.4066 6.57663 22.9866 8.01663 22.9366C9.42663 22.8866 9.96663 22.0466 11.6466 22.0466C13.3066 22.0466 13.8166 22.9366 15.2866 22.9066C16.7966 22.8866 17.7466 21.4766 18.6466 20.0566C19.7166 18.4166 20.1566 16.8066 20.1766 16.7266C20.1366 16.7166 17.0766 15.6066 17.0466 12.4966Z"
          fill="currentColor"
        />
        <path
          d="M14.7666 4.24664C15.5266 3.32664 16.0466 2.06664 15.9066 0.786641C14.8466 0.826641 13.5666 1.51664 12.7766 2.41664C12.0666 3.21664 11.4466 4.50664 11.6066 5.75664C12.7866 5.84664 13.9866 5.16664 14.7666 4.24664Z"
          fill="currentColor"
        />
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-xs leading-none">Download on the</span>
        <span className="text-xl font-semibold leading-tight">App Store</span>
      </div>
    </button>
  )
}

