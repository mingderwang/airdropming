import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/Error'
import Dashboard from './components/Dashboard'
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
  IconButton,
} from "@chakra-ui/react";

export default function App() {
  return (
    <div><ChakraProvider resetCSS>      <h1>Basic Example</h1>
      <Button colorScheme='blue'>Button</Button>
      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </ChakraProvider>
    </div>
  );
}
