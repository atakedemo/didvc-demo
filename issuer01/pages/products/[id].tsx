//VC詳細画面
import { 
  Box, Button, Image, Heading, Text,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure
} from '@chakra-ui/react';
import Header from '../../components/Header'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ChainId, useAddress, useChainId} from '@thirdweb-dev/react';
const { ethers } = require('ethers');

const ProductDetailContent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState<any>('Loading...');
  const [image, setImage] = useState<any>('');
  const [discription, setDiscription] = useState<any>('Loading...');
  const [price, setPrice] = useState(0);

  //Control Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    router.push('/');
  };

  const handleId = (_id:any) => {
    return _id
  }
  /*
  const fetchTickt = async() => {
    console.log(1)
  }
  */

  const handleSubmit = async() => {
    try {
      setLoading(true);
      //VCの発行処理
      onOpen();
    } catch (error) {
        console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /*
  useEffect(() => {
    //fetchTickt();
    //ユーザーが認証済みであるかのステータスをチェックする
  },[]);
  */

  return (
    <Box padding={4}>
      <Button onClick={handleBack} marginBottom={4}>
        Back
      </Button>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src={image} alt={name} height={300} />
      </Box>
      <Box marginTop={4}>
        <Heading as="h2" size="xl" marginBottom={2}>
          {name}
        </Heading>
        <Text>{discription}</Text>
      </Box>
      <Button isLoading={loading} loadingText="Minting..." backgroundColor='#8C7370' color='white' onClick={handleSubmit}>
        VC発行
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent>
            <ModalHeader>VC発行完了</ModalHeader>
            <ModalBody>
                Your mint transaction has been successfully completed.
            </ModalBody>
            <ModalFooter>
                <Button backgroundColor='#8C7370' color='white' onClick={()=>router.push(`/`)}>
                    ホーム画面へ戻る
                </Button>
            </ModalFooter>
          </ModalContent>
      </Modal>
    </Box>
  );
};

const ProductDetail = () => {
  const router = useRouter();
  return (
    <Box>
      <Header />
      <ProductDetailContent />
    </Box>
  )
}

export default ProductDetail;
