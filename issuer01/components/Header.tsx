import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Header = () => {
    const router = useRouter();
  
    const handleSetting = () => {
      router.push(`/seller/product-settings`)
    };
  
    return (
      <Flex
        as="header"
        align="center"
        justify="space-between"
        padding={4}
        backgroundColor="#F2F1EF"
      >
        <Box>
          <Text
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          >
            デモアプリ
          </Text>
        </Box>
        <Box>
            <Button 
                colorScheme="#F2F1EF"
                color="#000000"
                onClick={handleSetting} 
                margin={4}
            >
              アカウント設定
            </Button>
            <Button 
                colorScheme="#F2F1EF"
                color="#000000"
                onClick={()=> router.push('/owner/owns')} 
                margin={4}
            >
              発行済みVC一覧
            </Button>
            
        </Box>
      </Flex>
    );
};

export default Header;