// src/utils/iconFactory.tsx
import type { IconType } from "react-icons";

// ✅ Import ONLY the icons you use
import { FaReact, FaNode, FaShopify } from "react-icons/fa6";

import {
  SiJavascript,
  SiReactrouter,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiSolidity,
  SiKotlin,
  SiAndroidstudio,
  SiMaterialdesign,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

/**
 * Registry of allowed icons.
 * Add new icons here when you start using them.
 */
const ICONS = {
  fa6: {
    FaReact,
    FaNode,
    FaShopify,
  },
  si: {
    SiJavascript,
    SiReactrouter,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiSolidity,
    SiKotlin,
    SiAndroidstudio,
    SiMaterialdesign,
    SiPostgresql,
    SiNextdotjs,
  },
} as const satisfies Record<string, Record<string, IconType>>;

export function getIcon(id: string): IconType | null {
  const [lib, name] = id.split(":");
  const library = ICONS[lib as keyof typeof ICONS];
  if (!library) return null;

  return (library as Record<string, IconType>)[name] ?? null;
}


