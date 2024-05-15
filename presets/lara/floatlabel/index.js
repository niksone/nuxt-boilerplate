export default {
  root: {
    class: [
      "block relative",

      // Base Label Appearance
      "[&>*:last-child]:text-surface-900/60 dark:[&>*:last-child]:text-black/60",
      "[&>*:last-child]:absolute",
      "[&>*:last-child]:top-1/2",
      "[&>*:last-child]:-translate-y-1/2",
      "[&>*:last-child]:left-3",
      "[&>*:last-child]:pointer-events-none",
      "[&>*:last-child]:transition-all",
      "[&>*:last-child]:duration-200",
      "[&>*:last-child]:ease",

      // Focus Label Appearance
      "[&>*:last-child]:has-[:focus]:-top-0",
      "[&>*:last-child]:has-[:focus]:text-sm",
      "[&>*:last-child]:has-[:focus]:bg-surface-0",
      "[&>*:last-child]:has-[:focus]:z-10",

      // Filled Input Label Appearance
      "[&>*:last-child]:has-[.filled]:-top-0",
      "[&>*:last-child]:has-[.filled]:text-sm",
      "[&>*:last-child]:has-[.filled]:bg-surface-0",
      "[&>*:last-child]:has-[:focus]:z-10",
    ],
  },
}
