import { Loader2Icon } from "lucide-react";

export function LoaderSpinner() {
  return (
    <div className="fixed left-0 top-0 h-full w-full flex items-center justify-center">
      <Loader2Icon size={112} className="animate-spin self-center text-yellow-300" />
    </div>
  )
}