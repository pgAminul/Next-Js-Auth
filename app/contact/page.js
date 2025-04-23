import React from "react";

export default function contact() {
  return (
    <div>
      here are two ways routes are prefetched in Next.js: component: Routes are
      automatically prefetched as they become visible in the user's viewport.
      Prefetching happens when the page first loads or when it comes into view
      through scrolling. router.prefetch(): The useRouter hook can be used to
      prefetch routes programmatically.
    </div>
  );
}
