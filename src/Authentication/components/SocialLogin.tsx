/* eslint-disable max-len */
import React, { ReactNode } from "react";
import Svg, { Path } from "react-native-svg";

import { Box, useTheme } from "../../components";

interface SocialIconProps {
  children: ReactNode;
}

const Google = () => (
  <Svg viewBox="0 0 48 48" width={24} height={24}>
    <Path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <Path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <Path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <Path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </Svg>
);

const Facebook = () => (
  <Svg width={24} height={24} viewBox="0 0 50 50">
    <Path
      d="M32 11h5c.55 0 1-.45 1-1V3.262a.998.998 0 00-.926-.996C35.484 2.152 32.375 2 30.141 2 24 2 20 5.68 20 12.367V19h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7v19c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V28h7.223a.998.998 0 00.992-.89l.777-7A.998.998 0 0037 19h-8v-5a3 3 0 013-3zm0 0"
      fill="#34495e"
    />
  </Svg>
);

const Apple = () => (
  <Svg viewBox="0 0 50 50" width={30} height={30}>
    <Path
      d="M44.529 34.75c-1.081 2.393-1.598 3.464-2.986 5.579-1.94 2.954-4.678 6.64-8.064 6.665-3.012.025-3.789-1.965-7.876-1.932-4.087.02-4.939 1.969-7.954 1.938-3.386-.031-5.978-3.352-7.92-6.3C4.3 32.429 3.727 22.736 7.082 17.579c2.374-3.657 6.13-5.805 9.657-5.805 3.592 0 5.85 1.974 8.82 1.974 2.882 0 4.637-1.979 8.791-1.979 3.142 0 6.464 1.712 8.838 4.666-7.766 4.255-6.504 15.347 1.341 18.315zM31.197 8.468c1.511-1.94 2.657-4.677 2.242-7.468-2.466.168-5.349 1.743-7.034 3.782-1.526 1.857-2.791 4.615-2.298 7.283 2.69.087 5.474-1.517 7.09-3.597z"
      fill="#000000"
    />
  </Svg>
);

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();

  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center">
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
