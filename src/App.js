import React, { useState } from "react";
import truncateEthAddress from "truncate-eth-address";
import {
  Sdk,
  Env,
  EnvNames,
  MetaMaskWalletProvider,
  NetworkNames,
  randomPrivateKey,
} from "etherspot";

// change default environment
Env.defaultName = "testnets";
import {
  useControllableState,
  useBoolean,
  ChakraProvider,
  Box,
  Checkbox,
  Button,
  Image,
  Badge,
  Text,
  Icon,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Switch,
  InputGroup,
  InputRightElement,
  Flex,
  Tag,
  Heading,
  useBreakpoint,
} from "@chakra-ui/react";
import { StarIcon, EmailIcon, ChevronLeftIcon } from "@chakra-ui/icons";
var sdk;
var paymentHub;

const App = () => {
  const [network, setNetwork] = useControllableState({ defaultValue: "👽" });
  const [privateKey, setPrivateKey] = useControllableState({
    defaultValue: "👽",
  });
  const [hubAddress, setHubAddress] = useControllableState({
    defaultValue: "👽",
  });
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  async function connect() {
    if (!MetaMaskWalletProvider.detect()) {
      console.log("MetaMask not detected");
      return;
    }

    const walletProvider = await MetaMaskWalletProvider.connect();

    sdk = new Sdk(walletProvider, {});
    const { state$ } = sdk;
    setNetwork(
      state$._value.network.name +
        ": " +
        truncateEthAddress(state$._value.account.address)
    );
    console.info("SDK created", state$);
    console.log(NetworkNames.Mumbai);
  }

  async function createWallet() {
    const privateKey = randomPrivateKey();
    setPrivateKey(privateKey);
    paymentHub = new Sdk(privateKey, {
      networkName: sdk.state$._value.network.name,
    });
    setStep2(false);
    console.log(paymentHub.state$);
  }

  async function createHub() {
    setHubAddress(paymentHub.state$._value.account.address);
  }

  async function createClaimTx() {
    console.log("claimTx...");
  }

  return (
    <ChakraProvider resetCSS>
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mt={4}
      >
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text fontSize="3xl" fontWeight="bold">
            ⚡️Welcome to AirdropBee 🐝
          </Text>
          <Badge variant="subtle" colorScheme="pink" ml={1}>
            Beta
          </Badge>
        </Flex>
        <Text color="gray.500">A Quick Way to Airdrop Your Tokens</Text>
      </Flex>
      <Grid
        p={10}
        gap={6}
        templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      >
        <Stack>
          <Box
            backgroundColor="white"
            boxShadow="sm"
            borderRadius="lg"
            pl={3}
            pr={3}
            pt={5}
            pb={5}
          >
            <Flex
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              pb={2}
            >
              <ChevronLeftIcon />
              <Heading
                size="md"
                as="h2"
                lineHeight="shorter"
                fontWeight="bold"
                fontFamily="heading"
              >
                Create Wallet{" "}
              </Heading>
            </Flex>
            <Stack ml={4} spacing={2} mt={4} mr={4}>
              <Stack
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Button
                  onClick={async () => {
                    await connect();
                  }}
                >
                  Connect
                </Button>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme="whatsapp"
                  borderRadius="sm"
                  fontSize="sm"
                >
                  {network}
                </Tag>
                <Button
                  onClick={async () => {
                    await createWallet();
                  }}
                >
                  Create Wallet
                </Button>
                <Heading>Private Key:</Heading>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme="whatsapp"
                  borderRadius="sm"
                  fontSize="sm"
                >
                  {privateKey}
                </Tag>
              </Stack>
              <Stack spacing={2}>
                <Text color="gray.600">
                  Attention! Your funds can not be restored if private key lost.
                  Make sure the private key is saved.
                </Text>
                <Alert variant="left-accent" status="success">
                  <AlertIcon />
                  <AlertTitle mr={1}>Alert!</AlertTitle>
                  <AlertDescription>Copy private key</AlertDescription>
                </Alert>
              </Stack>
            </Stack>
            <Checkbox
              isChecked={step2}
              onChange={(e) => setStep2(e.target.checked)}
            >
              I have saved my private key. Proceed to next step.
            </Checkbox>
          </Box>
        </Stack>
        {step2 && (
          <Stack>
            <Box
              backgroundColor="white"
              boxShadow="sm"
              borderRadius="lg"
              pl={3}
              pr={3}
              pt={5}
              pb={5}
            >
              <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                pb={2}
              >
                <ChevronLeftIcon />
                <Heading
                  size="md"
                  as="h2"
                  lineHeight="shorter"
                  fontWeight="bold"
                  fontFamily="heading"
                >
                  Create/Access Hub
                </Heading>
              </Flex>
              <Stack ml={4} spacing={2} mt={4} mr={4}>
                <Stack
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Button
                    onClick={async () => {
                      await createHub();
                    }}
                  >
                    Create Hub
                  </Button>
                  <Heading>Payment Hub Address:</Heading>
                  <Tag
                    size="md"
                    variant="subtle"
                    colorScheme="whatsapp"
                    borderRadius="sm"
                    fontSize="sm"
                  >
                    {hubAddress}
                  </Tag>
                  <Text fontSize="md" color="gray.600">
                    Hub is used to distribute tokens among recipients.
                  </Text>
                  <Alert variant="left-accent" status="success">
                    <AlertIcon />
                    <AlertTitle mr={1}>Alert!</AlertTitle>
                    <AlertDescription>Copy hub P2P address</AlertDescription>
                  </Alert>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        )}
        {step3 && (
          <Stack>
            <Box
              backgroundColor="white"
              boxShadow="sm"
              borderRadius="lg"
              pl={3}
              pr={3}
              pt={5}
              pb={5}
            >
              <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                pb={2}
              >
                <ChevronLeftIcon />
                <Heading
                  size="md"
                  as="h2"
                  lineHeight="shorter"
                  fontWeight="bold"
                  fontFamily="heading"
                >
                  Under developerment.
                </Heading>
              </Flex>
              <Stack ml={4} spacing={2} mt={4} mr={4}>
                <Stack
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Tag
                    size="md"
                    variant="subtle"
                    colorScheme="whatsapp"
                    borderRadius="sm"
                    fontSize="sm"
                  >
                    Drag and Drop!
                  </Tag>
                  <Text fontSize="md" color="gray.600">
                    Drag any component from the left hand panel into this
                    editor. Then start interacting with them: try to drop the
                    Avatar component in this box…
                  </Text>
                  <Box
                    width="200px"
                    display="block"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    backgroundColor="gray.100"
                    borderRadius="lg"
                    p={3}
                    minHeight="60px"
                  />
                </Stack>
                <Stack spacing={2}>
                  <Tag size="md" variant="subtle" colorScheme="whatsapp">
                    Make sure you have enough funds in the Payment Hub address.
                  </Tag>
                  <Text color="gray.600">
                    then, provide an client address to claim 1 tokens.
                  </Text>
                </Stack>
                <Button
                  onClick={async () => {
                    await createClaimTx();
                  }}
                >
                  Claim
                </Button>
              </Stack>
            </Box>
          </Stack>
        )}
      </Grid>
    </ChakraProvider>
  );
};

export default App;
