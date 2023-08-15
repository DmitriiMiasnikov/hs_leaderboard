import { ReactNode } from "react";

import StyledComponentsRegistry from "lib/styledComponentsRegistry";
import Providers from "./providers";

export const metadata = {
  title: "Base project next13 + nest",
  icons: {
    icon: "images/logo.ico",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
