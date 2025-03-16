import type React from "react"
import { cn } from "@/lib/utils"

interface PlayStoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: "black" | "white"
}

export function PlayStoreButton({ className, variant = "white", ...props }: PlayStoreButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center px-4 py-2 rounded-lg transition-transform hover:scale-105",
        variant === "black" ? "bg-black text-white" : "bg-white text-black border border-gray-200",
        className,
      )}
      {...props}
    >
      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.609 2.73c-.367.214-.609.61-.609 1.02v16.5c0 .41.242.806.609 1.02l9.106-9.27L3.61 2.73z"
          fill="#2196F3"
        />
        <path
          d="M17.71 10.79l-2.332-1.337-2.666 2.71 2.666 2.71 2.332-1.336c.65-.373.65-1.374 0-1.747z"
          fill="#4CAF50"
        />
        <path d="M3.609 21.27c.27.158.574.184.861.09l11.91-6.82-2.666-2.71-10.105 9.44z" fill="#FFC107" />
        <path d="M16.38 9.543L4.47 2.82c-.287-.094-.59-.068-.861.09l10.105 9.44 2.666-2.71z" fill="#F44336" />
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-[10px] leading-none">Get it on</span>
        <span className="text-sm font-semibold leading-tight">Google Play</span>
      </div>
    </button>
  )
}

