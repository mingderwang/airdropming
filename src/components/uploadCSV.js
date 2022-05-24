/** 
 The following code demonstrates a simple file upload form.
 
 To make user experience even better you can easily integrate with
 libraries such as react-dropzone
*/
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

import React from "react";
import { render } from "react-dom";

export default class UploadCSV extends React.Component {
  state = {
    file: null,
  };

  setFile = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  upload = () => {
    if (!this.state.file) return;

    let formData = new FormData();
    formData.append("files", this.state.file, this.state.name);
    formData.append("otherData", "canBeAnythingYouWant");
    console.log("this.state.file", this.state.file);
    console.log("formData", formData);
    fetch("https://api.muzamint.com/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((data) => data.json())
      .then((json) => this.setState({ json }));
  };
  render() {
    return (
      <div>
        <Input type="file" onChange={this.setFile} />
        <Button onClick={this.upload}>Upload Start</Button>
        {this.state.json ? (
          <div>
            Response:<pre>{JSON.stringify(this.state.json, null, 2)}</pre>
          </div>
        ) : null}
      </div>
    );
  }
}
