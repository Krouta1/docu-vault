"use client";
/*This page serves as one definer for all providers */

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { convex } from "@/components/providers/ConvexClientProvider";

export function SiteProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
      >
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </>
  );
}
