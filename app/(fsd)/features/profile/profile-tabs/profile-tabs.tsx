"use client";
import { Tabs, TabsList, TabsTab } from "@mantine/core";
import { FC, useCallback } from "react";
import { ProfileTabsProps } from "./types";
import { usePathname, useRouter } from "next/navigation";
import { Route } from "next";

export const ProfileTabs: FC<ProfileTabsProps> = ({
  profileId,
  isCurrentUser,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = useCallback(
    (value: string | null) => {
      if (value) {
        router.push(value as Route);
      }
    },
    [router]
  );

  return (
    <Tabs pb="sm" value={pathname} onChange={handleNavigate}>
      <TabsList>
        <TabsTab value={`/profile/${profileId}`}>Календари</TabsTab>
        {isCurrentUser && (
          <TabsTab value={`/profile/${profileId}/bookmarks`}>
            Сохраненное
          </TabsTab>
        )}
      </TabsList>
    </Tabs>
  );
};
