import { WithId, WithParams } from "@/app/(fsd)/app/types";
import { ProfileTabs } from "@/app/(fsd)/features/profile";
import { PageWrapper } from "@/app/(fsd)/shared";
import { ProfileHeaderWidget } from "@/app/(fsd)/widgets/profile/profile-header";
import { getEnhancedDb, getSession } from "@/server/utils";
import { Container } from "@mantine/core";
import { notFound } from "next/navigation";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<WithParams<WithId>>> = async ({
  params,
  children,
}) => {
  const db = await getEnhancedDb();
  const user = await db.user.findFirst({
    where: { id: params.id },
    select: { image: true, name: true },
  });
  const session = await getSession();

  if (!user) notFound();

  const isCurrentUser = params.id === session?.user.id;

  return (
    <PageWrapper>
      <Container>
        <ProfileHeaderWidget
          name={user.name ?? ""}
          imageUrl={user.image}
          profileId={params.id}
        />
        <ProfileTabs
          isCurrentUser={isCurrentUser}
          profileId={params.id}
          tabs={[]}
        />
        {children}
      </Container>
    </PageWrapper>
  );
};

export default Layout;
