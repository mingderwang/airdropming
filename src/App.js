import React, { useState } from "react";
import UploadCSV from "./components/uploadCSV";
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
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);
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
    console.log("on network: ", state$._value.network.name);
  }

  async function createWallet() {
    const privateKey = randomPrivateKey();
    setPrivateKey(privateKey);
    paymentHub = new Sdk(privateKey, {
      networkName: sdk.state$._value.network.name,
    });
    setStep2(false);
    console.log("paymentHub.state$", paymentHub.state$);
  }

  async function createHub() {
    setHubAddress(paymentHub.state$._value.account.address);
  }

  async function createClaimTx() {
    console.log("starting ...");
    setStep4(true);
  }

  async function createSend() {
    console.log("sending ...");
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
            {privateKey !== "👽" && (
              <Checkbox
                isChecked={step2}
                onChange={(e) => setStep2(e.target.checked)}
              >
                I have saved my private key. Proceed to next step.
              </Checkbox>
            )}
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
                    <AlertDescription>
                      Hub is used to distribute tokens among recipients. Copy
                      above hub P2P address
                    </AlertDescription>
                  </Alert>
                </Stack>
              </Stack>
              {hubAddress !== "👽" && (
                <Checkbox
                  isChecked={step3}
                  onChange={(e) => setStep3(e.target.checked)}
                >
                  I have copied the hub P2P address. Proceed to next step.
                </Checkbox>
              )}
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
                  Select Recipients.
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
                    Prepare a list of recipients and amount of given tokens in a
                    CVS file to upload.
                  </Tag>
                  <Text fontSize="md" color="gray.600">
                    For example, 3 addresses in a .csv file as bellow. Where
                    there are a recipient address and amount of given tokens per
                    line, with a comma as a delimiter.
                  </Text>
                  <Box
                    width="500px"
                    display="block"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    backgroundColor="gray.100"
                    borderRadius="lg"
                    p={3}
                    minHeight="60px"
                  >
                    0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199, 1
                    0xdd2fd4581271e230360230f9337d5c0430bf44c0, 50
                    0xbda5747bfd65f08deb54cb465eb87d40e51b197e, 1000
                  </Box>
                </Stack>
                <Stack spacing={2}>
                  <Alert variant="left-accent" status="success">
                    <AlertIcon />
                    <AlertTitle mr={1}>Alert!</AlertTitle>
                    <AlertDescription>
                      Make sure you have enough funds in the Payment Hub
                      address.
                    </AlertDescription>
                  </Alert>
                  <Text color="gray.600">
                    Choose your .cvs file, and then press the Upload Start
                    button.
                  </Text>
                </Stack>
              </Stack>
              <UploadCSV />
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
                  Select Tokens.
                </Heading>
              </Flex>
              <Stack ml={4} spacing={2} mt={4} mr={4}>
                <Stack
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Heading>
                    {`For ${paymentHub.state$._value.network.name} network.`}
                  </Heading>
                  <Text fontSize="md" color="gray.600">
                    Input the token contract address on this network.
                    <p>For example, the SLV token contract address is</p>
                  </Text>
                  <Box
                    width="450px"
                    display="block"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    backgroundColor="gray.100"
                    borderRadius="lg"
                    p={3}
                    minHeight="60px"
                  >
                    0x7F57f0bde95d963E149F96E1d0D64b89BFf1926b
                  </Box>
                </Stack>
                <Stack spacing={2}>
                  <Input
                    placeholder={`To paste your tokens contract address for ${paymentHub.state$._value.network.name} network here`}
                  />
                </Stack>
                <Button
                  onClick={async () => {
                    await createClaimTx();
                  }}
                >
                  Next Step
                </Button>
              </Stack>
            </Box>
          </Stack>
        )}
        {step4 && (
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
                  Top up and Send.
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
                    Minimum required amount 303.0 SLV Including 1% commission
                    3.0 SLV Recipient pays commission 0 SLV Top up hub Copy
                    claim link:
                    https://app.airdropme.io/claim/0x5aA92922F6b53B6193a60F98AA200364f8a6CeA5
                  </Tag>
                  <Text fontSize="md" color="gray.600">
                    Send minimum required amount of tokens to your hub created
                    at step 2. Available balance
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
                    Send minimum required amount of tokens to your hub created
                    at step 2.
                  </Tag>
                  <Text color="gray.600">
                    Make sure you have enough tokens in the hub address, then
                    press Start.
                  </Text>
                </Stack>
                <Button
                  onClick={async () => {
                    await createSend();
                  }}
                >
                  Start
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
