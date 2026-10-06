"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/pocketwatch-salary-tracker/id6467176746";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.newyorksoul.pocketwatch";

type Platform = "ios" | "android" | "desktop";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
      <path d="M16.9 12.7c0-2.5 2-3.7 2.1-3.8-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-2-.9-3.2-.9-1.7 0-3.2 1-4.1 2.6-1.8 3.1-.4 7.6 1.3 10.1.8 1.2 1.8 2.5 3.1 2.4 1.3-.1 1.8-.8 3.4-.8 1.7 0 2.2.8 3.4.8 1.4 0 2.3-1.2 3.1-2.4.9-1.4 1.3-2.8 1.3-2.9-.1 0-3.1-1.2-4.1-3.8ZM15.5 5.4c.7-.8 1.2-2 1.1-3.1-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1.1 3 1.2.1 2.4-.5 2.9-1.4Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" className="h-8 w-8">
      <path d="M4 4.7v18.7c0 .7.8 1.2 1.4.8l14.9-9.3c.7-.4.7-1.3 0-1.7L5.4 3.9A1 1 0 0 0 4 4.7Z" fill="#00E3FF"/>
      <path d="M4 4.7v18.7c0 .7.8 1.2 1.4.8l14.9-9.3c.7-.4.7-1.3 0-1.7L5.4 3.9A1 1 0 0 0 4 4.7Z" fill="url(#play-grad)" opacity="0.9"/>
      <defs>
        <linearGradient id="play-grad" x1="4" x2="20.8" y1="4.7" y2="23.2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1BE1FF" />
          <stop offset="0.7" stopColor="#00C2FF" />
          <stop offset="1" stopColor="#18E4A1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function StoreButton({ href, type }: { href: string; type: "app-store" | "play-store" }) {
  const badgeSrc = type === "app-store" ? "/app-store-badge.svg" : "/google-play-store.svg";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-[18px] bg-black p-3 shadow-[0_8px_26px_rgba(2,8,15,0.38)] transition hover:opacity-95"
      aria-label={type === "app-store" ? "Download on the App Store" : "Get it on Google Play"}
    >
      <img
        src={badgeSrc}
        alt={type === "app-store" ? "Download on the App Store" : "Get it on Google Play"}
        className="h-[68px] w-auto rounded-[12px] object-contain"
      />
    </Link>
  );
}

export function DownloadButtons() {
  const [platform, setPlatform] = useState<Platform>("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);

    setPlatform(isIOS ? "ios" : isAndroid ? "android" : "desktop");
  }, []);

  const orderedButtons =
    platform === "ios"
      ? [
          { href: APP_STORE_URL, type: "app-store" as const },
          { href: PLAY_STORE_URL, type: "play-store" as const },
        ]
      : platform === "android"
        ? [
            { href: PLAY_STORE_URL, type: "play-store" as const },
            { href: APP_STORE_URL, type: "app-store" as const },
          ]
        : [
            { href: APP_STORE_URL, type: "app-store" as const },
            { href: PLAY_STORE_URL, type: "play-store" as const },
          ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {orderedButtons.map((button) => (
        <StoreButton key={button.type} href={button.href} type={button.type} />
      ))}
    </div>
  );
}
