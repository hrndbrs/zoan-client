import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useOnRouteChange<T>(initialState: T) {
  const path = usePathname();
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    setState(initialState);
  }, [path, initialState]);

  return [state, setState] as const;
}
