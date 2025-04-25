"use client";
import React from "react";
import { Icon, loadIcon } from "@iconify/react";

export default function Drawer() {
  loadIcon("simple-line-icons:close");

  return (
    <div className="drawer-side">
      <label
        htmlFor="right-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content space-y-4 min-h-full w-80 p-4 font-[family-name:var(--font-work-sans)]">
        <label
          role="button"
          htmlFor="right-drawer"
          aria-label="close sidebar"
          className="mt-2 mb-6 self-end flex font-bold items-center gap-2 btn btn-soft btn-accent rounded-full"
        >
          Close
          <Icon icon="simple-line-icons:close" />
        </label>

        <li>
          <a>Features</a>
        </li>
        <li>
          <a>FAQs</a>
        </li>
        <li>
          <button className="btn btn-accent">
            <Icon icon="meteor-icons:share" /> Share
          </button>
        </li>
      </ul>
    </div>
  );
}
