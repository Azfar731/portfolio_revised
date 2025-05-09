// src/utils/iconFactory.tsx
import * as Fa6 from "react-icons/fa6";
import * as Si   from "react-icons/si";

/**
 * Returns the React component for an icon ID such as "fa6:FaReact".
 * If the ID is invalid it returns null (so your UI doesn’t crash).
 */
export function getIcon(id: string) {
  const [lib, name] = id.split(":");
  const libraries: Record<string, Record<string, unknown>> = {
    fa6: Fa6,
    si: Si
  };

  const library = libraries[lib];
  if (!library) return null;
  return library[name] as React.ComponentType | null;
}
