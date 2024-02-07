"use client";
import { FC, useEffect } from "react";
import { usePathname } from "next/navigation";

import { navbarOpened$ } from "@/app/stores/app";

export const RouteListenerFeature: FC = () => {
  const location = usePathname();

  useEffect(() => {
    navbarOpened$.set(false);
  }, [location]);

  return null;
};
