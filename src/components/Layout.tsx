import { Routes, Route, Outlet  } from "react-router-dom";
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
    Link,
  } from "@chakra-ui/react";

export default function Layout() {
    return (
        <>
        <Button colorScheme='blue'>Button</Button>
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
       
        </>
    );
  }