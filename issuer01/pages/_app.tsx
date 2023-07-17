import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from '../styles/theme';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Ethereum, Polygon, Mumbai } from "@thirdweb-dev/chains";
import { SessionProvider } from 'next-auth/react';

const activeChainId = ChainId.Mumbai;

const MyApp = ({ Component, pageProps: { session, ...pageProps }  }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <ThirdwebProvider activeChain={Mumbai}
        supportedChains={[Mumbai ]}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThirdwebProvider>
    </SessionProvider>
  );
};

export default MyApp;
