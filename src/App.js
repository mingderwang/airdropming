import React from "react";
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

const App = () => {
  let sdk;
  let paymentHub;
  const [network, setNetwork] = useControllableState({ defaultValue: "👽" });
  const [privateKey, setPrivateKey] = useControllableState({
    defaultValue: "👽",
  });
  const [step2, setStep2] = useBoolean();
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
  }

  async function createWallet() {
    const privateKey = randomPrivateKey();
    setPrivateKey(privateKey);
    paymentHub = new Sdk(privateKey, {});

    console.log("payment hub", output);
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
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme="whatsapp"
                  borderRadius="sm"
                  fontSize="sm"
                >
                  {privateKey}
                </Tag>
                <Alert variant="left-accent" status="success">
                  <AlertIcon />
                  <AlertTitle mr={1}>Warning!</AlertTitle>
                  <AlertDescription>Copy private key</AlertDescription>
                </Alert>
              </Stack>
              <Stack spacing={2}>
                <Text color="gray.600">
                  Attention! Your funds can not be restored if private key lost.
                  Make sure the private key is saved.
                </Text>
              </Stack>
            </Stack>
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
                  B
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
                    Preset
                  </Tag>
                  <Text color="gray.600">
                    A preset is a group of components (like Alert). Just drop a
                    preset to easily setup a complexe component like this:
                  </Text>
                </Stack>
                <Alert variant="left-accent" status="success">
                  <AlertIcon />
                  <AlertTitle mr={1}>Alert!</AlertTitle>
                  <AlertDescription>I'm an Alert preset</AlertDescription>
                </Alert>
              </Stack>
            </Box>
          </Stack>
        )}
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
                C area
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
                  Drag any component from the left hand panel into this editor.
                  Then start interacting with them: try to drop the Avatar
                  component in this box…
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
                  Preset
                </Tag>
                <Text color="gray.600">
                  A preset is a group of components (like Alert). Just drop a
                  preset to easily setup a complexe component like this:
                </Text>
              </Stack>
              <Alert variant="left-accent" status="success">
                <AlertIcon />
                <AlertTitle mr={1}>Alert!</AlertTitle>
                <AlertDescription>I'm an Alert preset</AlertDescription>
              </Alert>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
