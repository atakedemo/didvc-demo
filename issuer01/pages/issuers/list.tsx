import { Box, Button, Image, Heading, Text, Flex} from '@chakra-ui/react';
import Header from '../../components/Header'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
  
type Issuers = {
    id: number;
    name: string;
    image: string;
    type: number;
};

const issuers: Issuers[] = [
    { id: 40, name: "E大学", type: 1, image: "https://dao-org.4attraem.com/assets/sample_soccer.jpeg" },
    { id: 50, name: "F大学", type: 1, image: "https://dao-org.4attraem.com/assets/e62d625e-5b20-4848-bb5d-71c9d01ae219.png" },
    { id: 60, name: 'G社', type: 2, image: "https://dao-org.4attraem.com/assets/16fa6730-ee61-44a7-a075-e335d96ef4a9.png" },
    { id: 70, name: 'F社', type: 2, image: "https://dao-org.4attraem.com/assets/16fa6730-ee61-44a7-a075-e335d96ef4a9.png" },
];

const IssuerList = () => {
const router = useRouter();

return (
    <Box padding={4}>
        <Heading as="h2" size="lg" marginBottom={4}>
            追加したい発行機関を選択してください
        </Heading>
        <Box padding={4}>
          <Heading as="h3" size="lg" >大学</Heading>
            <Flex flexWrap="wrap">
            {issuers.map((product) => (
                product.type ==1 &&
                <Box
                    key={product.id}
                    width={{ base: '100%', sm: '50%', md: '33%', lg: '25%' }}
                    padding={2}
                    cursor="pointer"
                    onClick={() => router.push(`/issuers/setup/${product.id}`)}
                    _hover={{ transform: 'scale(1.05)' }}
                >
                <Box
                    borderWidth={1}
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="md"
                >
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
        <Box padding={4}>
          <Heading as="h3" size="lg" >企業</Heading>
            <Flex flexWrap="wrap">
            {issuers.map((product) => (
                product.type ==2 &&
                <Box
                    key={product.id}
                    width={{ base: '100%', sm: '50%', md: '33%', lg: '25%' }}
                    padding={2}
                    cursor="pointer"
                    onClick={() => router.push(`/issuers/setup/${product.id}`)}
                    _hover={{ transform: 'scale(1.05)' }}
                >
                <Box
                    borderWidth={1}
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="md"
                >
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
    </Box>

    );
};

const ProductDetail = () => {
const router = useRouter();
return (
    <Box>
    <Header />
    <IssuerList />
    </Box>
)
}

export default ProductDetail;
