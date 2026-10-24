"use client";

import { PledgeSubmission } from "./types";

const PLEDGE_KEY = "allyship_pledge_data";
const SAVED_RESOURCES_KEY = "allyship_saved_resources";
const REGISTERED_EVENTS_KEY = "allyship_registered_events";
const CHECKLIST_KEY = "allyship_action_checklist";

export function getStoredPledge(): PledgeSubmission | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PLEDGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error("Failed to read pledge from localStorage", e);
    return null;
  }
}

export function savePledge(data: PledgeSubmission): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PLEDGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event("allyship-pledge-updated"));
  } catch (e) {
    console.error("Failed to save pledge to localStorage", e);
  }
}

export function getSavedResourceIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(SAVED_RESOURCES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function toggleSavedResourceId(id: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const current = getSavedResourceIds();
    const exists = current.includes(id);
    const updated = exists ? current.filter((item) => item !== id) : [...current, id];
    localStorage.setItem(SAVED_RESOURCES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("allyship-saved-resources-updated"));
    return !exists;
  } catch (e) {
    return false;
  }
}

export function getRegisteredEventIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(REGISTERED_EVENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function registerForEvent(id: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const current = getRegisteredEventIds();
    if (!current.includes(id)) {
      const updated = [...current, id];
      localStorage.setItem(REGISTERED_EVENTS_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event("allyship-events-updated"));
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

export function getChecklistState(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(CHECKLIST_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function toggleChecklistItem(id: string): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const current = getChecklistState();
    const updated = { ...current, [id]: !current[id] };
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("allyship-checklist-updated"));
    return updated;
  } catch (e) {
    return {};
  }
}
