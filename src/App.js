import React from 'react'
import {
  ChakraProvider,
  Box,
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
  Heading
} from '@chakra-ui/react'
import { StarIcon, EmailIcon, ChevronLeftIcon } from '@chakra-ui/icons'

const App = () => (
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
          ⚡️Welcome to OpenChakra
        </Text>
        <Badge variant="subtle" colorScheme="pink" ml={1}>
          BETA
        </Badge>
      </Flex>
      <Text color="gray.500">The Visual Editor for Chakra UI</Text>
    </Flex>
    <Grid p={10} gap={6} templateColumns="repeat(auto-fit, minmax(350px, 1fr))">
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
              A{' '}
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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={10}
      >
        <Text
          fontSize="lg"
          lineHeight="normal"
          textAlign="center"
          mb={5}
          color="twitter.900"
          maxWidth="sm"
        >
          With a bit of practice, you will able to design awesome components:
        </Text>
        <Box
          bg="#ffffff"
          borderRadius="lg"
          width="sm"
          minHeight="sm"
          border="1px solid lightgrey"
          overflow="hidden"
        >
          <Box>
            <Image
              size="100px"
              fallbackSrc="https://via.placeholder.com/150"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              width="100%"
              height="auto"
              minHeight="245px"
            />
          </Box>
          <Box p={5} pb={8}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={1}
              flexDirection="row"
            >
              <Badge
                variant="subtle"
                colorScheme="teal"
                mr={2}
                borderRadius="lg"
                pl={2}
                pr={2}
              >
                NEW
              </Badge>
              <Text color="gray.500" fontSize="xs">
                3 BEDS • 2 BATHS
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl">
              Modern home in city center
            </Text>
            <Text fontSize="sm" mb={3}>
              $119/night
            </Text>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="flex-start"
            >
              <StarIcon color="yellow.400" mr={1} />
              <Text fontWeight="bold" mr={1}>
                4.84
              </Text>
              <Text fontSize="sm">(190)</Text>
            </Box>
          </Box>
        </Box>
      </Box>
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
)

export default App
