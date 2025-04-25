"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon, loadIcon } from "@iconify/react";

export default function Header() {
  loadIcon("meteor-icons:share");

  return (
    <header className="w-full flex justify-between py-6 items-center font-[family-name:var(--font-work-sans)] border-b border-b-base-200">
      <div className="relative w-[152px] sm:w-[177px] h-[40px]">
        <Image src="/skinsight-logo.svg" fill alt="logo" priority />
      </div>

      <nav className="hidden sm:flex gap-5 items-center">
        <Link href="/">Features</Link>
        <Link href="/">FAQs</Link>
      </nav>

      <button className="hidden sm:flex btn rounded-full btn-primary">
        <Icon icon="meteor-icons:share" /> Share
      </button>

      <label
        role="button"
        htmlFor="right-drawer"
        className="block space-y-[5px] sm:hidden"
      >
        <div className="w-[30px] h-[3px] bg-accent rounded-full"></div>
        <div className="w-[30px] h-[3px] bg-accent rounded-full"></div>
        <div className="w-[30px] h-[3px] bg-accent rounded-full"></div>
      </label>
    </header>
  );
}
