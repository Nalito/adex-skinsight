"use client";
import { Icon, loadIcon } from "@iconify/react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageDropzone() {
  loadIcon("mage:image-upload");
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="max-w-[740px] w-full mx-auto mt-10 p-6 border-2 border-neutral text-neutral border-dashed rounded-3xl bg-base-200 transition-colors duration-200 h-96 flex justify-center items-center font-[family-name:var(--font-work-sans)]"
    >
      <input {...getInputProps()} />

      <div className="flex flex-col justify-center items-center gap-y-4">
        <Icon icon="mage:image-upload" className="size-14" />
        <div className="block text-center space-y-1">
          <h2 className="font-bold text-base">Drop an image or browse</h2>
          <p className="text-neutral/70">
            Format: .jpeg, .png & Max file size: 25 MB
          </p>
        </div>
        <button className="btn btn-neutral w-fit font-normal">
          Browse images
        </button>
      </div>
    </div>
  );
}
