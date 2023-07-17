//トップ画面＆Issuer一覧
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { signIn, signOut, useSession } from 'next-auth/react';


type Issuers = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const issuers: Issuers[] = [
  { id: 10, name: "A大学", image: "https://dao-org.4attraem.com/assets/school.png", price: 1 },
  { id: 20, name: "B社", image: "https://dao-org.4attraem.com/assets/company.png", price: 1 },
  { id: 30, name: 'C社', image: "https://dao-org.4attraem.com/assets/company.png", price: 2 },
];

const IssuersList = () => {
  const router = useRouter();

  const handleAddIssuer = async() => {
    //Issuer追加画面へ遷移させる
    router.push(`/issuers/list`)
  };

  return (
    <Box padding={4}>
      <Heading as="h2" size="lg" marginBottom={4}>
        発行期間一覧（Issuer一覧）
      </Heading>
      <Button onClick={handleAddIssuer} marginBottom={4}>
        発行機関追加
      </Button>
      <Flex flexWrap="wrap">
        {issuers.map((product) => (
          <Box
            key={product.id}
            width={{ base: '100%', sm: '50%', md: '33%', lg: '25%' }}
            padding={2}
            cursor="pointer"
            onClick={() => router.push(`/issuers/${product.id}`)}
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Box
              borderWidth={1}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
            >
              <Image src={product.image} alt={product.name} height={200} width="100%" />
              <Box padding={4}>
                <Heading as="h3" size="lg" marginBottom={2}>
                  {product.name}
                </Heading>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>

  );
};

const Home = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    // ログイン処理や初期データの取得などの副作用を実行
  }, []);
  //if (session) {
    return (
      <Box>
        <Header />
        <IssuersList />
      </Box>
    );
  /*
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );*/
};

export default Home;
