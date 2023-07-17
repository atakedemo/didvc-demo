import { 
    Box, Button, Image, Heading, Text,FormControl, FormLabel, Input,Link,Divider,AbsoluteCenter,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure
  } from '@chakra-ui/react';
  import Header from '../../../components/Header'
  import { useRouter } from 'next/router';
  import { useState, useEffect } from 'react';
  import { ConnectWallet, ChainId, useAddress, useChainId, Web3Button } from "@thirdweb-dev/react";

  const { ethers } = require('ethers');
  
  const SetupMenu = () => {
    const router = useRouter();
    const { id } = router.query;
    const [name, setName] = useState<any>('');
    const [discription, setDiscription] = useState<any>('');
    const [walletUserId, setWalletUserId] = useState<any>('');
    const [walletPw, setWalletPw] = useState<any>('');
  
    //Control Modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
  
    const handleBack = () => {
      router.push('/');
    };
  
    const handleId = (_id:any) => {
      return _id
    }
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    const handleDiscriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDiscription(event.target.value);
    };

    const handleWalletIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setWalletUserId(event.target.value);
    };
  
    const handleWalletPwhange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setWalletPw(event.target.value);
    };
  
    const handleLogin = async() => {
      try {
        setLoading(true);
        //IDaaSと既存システムの認証基盤との紐付け
        //onOpen();
      } catch (error) {
          console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleConnect = async() => {
      try {
        setLoading(true);
        //IDaaSに対するDIDの紐付け（デジタル署名の送付）
        onOpen();
      } catch (error) {
          console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const handleConnectViaCloud = async() => {
      try {
        setLoading(true);
        //IDaaSに対するDIDの紐付け（デジタル署名の送付）
        onOpen();
      } catch (error) {
          console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const handleWalletSignin = async() => {
      if (!window.ethereum) {
        console.error('!window.ethereum')
        return
      }
  
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
  
      const signer = await provider.getSigner()
      const message = 'message'
      //const address = await signer.getAddress()
      const signature = await signer.signMessage(message)
      console.log(signature);
      /*
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ message, address, signature }),
      })
      const body = await response.json()
      */
    }
  
    return (
      <Box padding={4}>
        <Box padding={4}>
          <Heading as="h3" size="lg" >STEP1｜ログイン認証</Heading>
          <Text>連携先のサービスに対してログインし、情報の取得を許可してください</Text>
          <Box padding={4} backgroundColor='#F2F1EF'>
            <form onSubmit={handleLogin}>
              <FormControl marginBottom={4}>
                <FormLabel>ID</FormLabel>
                <Input value={name} onChange={handleNameChange} backgroundColor='white' />
              </FormControl>
              <FormControl marginBottom={4}>
                <FormLabel>Password</FormLabel>
                <Input value={discription} onChange={handleDiscriptionChange} backgroundColor='white' />
              </FormControl>
              <Button 
                backgroundColor='#8C7370' 
                marginLeft={3} 
                color='white' 
                onClick={handleConnect}>
                ログイン認証を行う
              </Button>
            </form>
          </Box>
          <Link color={'blue'} marginTop={2}>連携する前の注意</Link>
        </Box>
        <Box padding={4}>
          <Heading as="h3" size="lg" >STEP2｜DIDの登録</Heading>
          <Text>VCで証明したDIDのウォレットを連携してください</Text>
          <Box padding={2}>
            <Heading as="h4" size="md" >アンホステッドウォレットから連携</Heading>
            <ConnectWallet />
            <Button 
                backgroundColor='#8C7370' 
                marginLeft={3} 
                color='white' 
                onClick={handleWalletSignin}>
                連携する
              </Button>
          </Box>
          <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter bg='white' px='4'>
              又は
            </AbsoluteCenter>
          </Box>
          <Box padding={2}>
            <Heading as="h4" size="md" >カストディウォレットから連携</Heading>
            <Box padding={4} backgroundColor='#F2F1EF'>
              <form onSubmit={handleConnectViaCloud}>
                <FormControl marginBottom={4}>
                  <FormLabel>ウォレットユーザーID</FormLabel>
                  <Input value={walletUserId} onChange={handleWalletIdChange} backgroundColor='white' />
                </FormControl>
                <FormControl marginBottom={4}>
                  <FormLabel>取引用パスワード</FormLabel>
                  <Input value={walletPw} onChange={handleWalletPwhange} backgroundColor='white' />
                </FormControl>
                <Button 
                  backgroundColor='#8C7370' 
                  marginLeft={3} 
                  color='white' 
                  onClick={handleConnectViaCloud}>
                  XXXXウォレットを連携
                </Button>
              </form>
            </Box>
          </Box>
          <Link color={'blue'} marginTop={2}>連携する前の注意事項</Link>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
            <ModalContent>
              <ModalHeader>設定完了</ModalHeader>
              <ModalBody>
                  この発行機関における設定が完了しました。VCが発行できます。
              </ModalBody>
              <ModalFooter>
                  <Button backgroundColor='#8C7370' color='white' onClick={()=>router.push(`/`)}>
                      閉じる
                  </Button>
              </ModalFooter>
            </ModalContent>
        </Modal>
      </Box>
    );
  };
  
  const SetupIssuer = () => {
    const router = useRouter();
    return (
      <Box>
        <Header />
        <SetupMenu />
      </Box>
    )
  }
  
  export default SetupIssuer;
  