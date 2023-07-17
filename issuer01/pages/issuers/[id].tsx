import { 
  Box, Button, Image, Heading, Text,FormControl, FormLabel, Input,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure
} from '@chakra-ui/react';
import Header from '../../components/Header'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const SetupMenu = () => {
  const router = useRouter();
  const { id } = router.query;

  //Control Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [qrImage, setQrImage] = useState("https://dao-org.4attraem.com/assets/sample_qr.png");

  const handleRequestVc = async() => {
    try {
      setLoading(true);
      //IDaaSと既存システムの認証基盤との紐付け
      onOpen();
    } catch (error) {
        console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box padding={4}>
      <Box padding={4} backgroundColor='#F2F1EF'>
        <Button 
            backgroundColor='#8C7370' 
            marginLeft={3} 
            color='white' 
            onClick={handleRequestVc}>
            在籍証明VC
          </Button>
      </Box>

      <Box padding={4} backgroundColor='#F2F1EF'>
        <Button 
            backgroundColor='#8C7370' 
            marginLeft={3} 
            color='white' 
            onClick={handleRequestVc}>
            通学証明VC
          </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent>
            <ModalHeader>VC発行完了</ModalHeader>
            <ModalBody>
                VCが発行されました。ダウンロードまたはQR読み取りで保存してくだい。
                <Box>
                  <Image src={qrImage} alt={'QRコード'} height={200} width={200} />
                </Box>
            </ModalBody>
            <ModalFooter>
              <Button backgroundColor='#8C7370' color='white' onClick={()=>router.push(`/`)} marginRight={3}>
                ダウンロード
              </Button>
              <Button backgroundColor='#8C7370' color='white' onClick={()=>router.push(`/`)} marginRight={3}>
                  ストレージバックアップ
              </Button>
              <Button backgroundColor='#8C7370' color='white' onClick={()=>router.push(`/`)}>
                Close
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
      <SetupMenu />
    </Box>
  )
}

export default ProductDetail;
