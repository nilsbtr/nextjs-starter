"use client";

import { useId } from "react";

import { LuGlobe } from "react-icons/lu";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Language options
const languages = [
  { value: "en", label: "En" },
  { value: "es", label: "Es" },
  { value: "fr", label: "Fr" },
  { value: "de", label: "De" },
  { value: "ja", label: "Ja" },
];

export function LanguageMenu() {
  const id = useId();

  return (
    <Select defaultValue="en">
      <SelectTrigger>
        <LuGlobe size={16} aria-hidden="true" />
        <SelectValue className="hidden sm:inline-flex" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
