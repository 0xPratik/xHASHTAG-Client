import React from "react";
import {
  Heading,
  Box,
  VStack,
  Input,
  Text,
  Flex,
  Spacer,
  GridItem,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Grid,
} from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons'

export default function Trade() {
  return (
    <Box
      w="100%"
      h="100vh"
      bg="cyan.50"
      d="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        w="40vw"
        h="50vh"
        flexDir="column"
        p={10}
        boxShadow="2xl"
        alignItems="center"
        borderRadius="base"
      >
        <Heading>Trade</Heading>
        <VStack spacing={10}>
          <Box w="400px" h="30px" >
            <Flex align="center">
              <Box>
                <Text>Input</Text>
              </Box>
              <Spacer />
              <Box>
                <Text>Balance 0.00</Text>
              </Box>
            </Flex>
            <Grid mt={2} templateColumns="repeat(7, 1fr)" gap={5}>
                <GridItem colSpan={5}>
                <Input  variant='unstyled' placeholder="0" />
                </GridItem>
              <GridItem colStart={6} colEnd={8}>
                <Menu>
                  <MenuButton
                    transition="all 0.2s"
                    fontWeight="bold"
                    fontSize="md"
                    _hover={{ color: "gray.400" }}
                  >
                    Tokens <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>#freedom</MenuItem>
                    <MenuItem>#india</MenuItem>
                    <MenuDivider />
                    <MenuItem>#Nepal</MenuItem>
                    <MenuItem>#forest</MenuItem>
                  </MenuList>
                </Menu>
              </GridItem>
            </Grid>
          </Box>
          <Button colorScheme="green" borderRadius="full">
              Swap
          </Button>
          <Box w="400px" h="30px">
          <Grid mt={2} templateColumns="repeat(7, 1fr)" gap={5}>
                <GridItem colSpan={5}>
                <Input  variant='unstyled' placeholder="0.00" />
                </GridItem>
              <GridItem colStart={6} colEnd={8}>
                <Menu>
                  <MenuButton
                    transition="all 0.2s"
                    fontWeight="bold"
                    fontSize="md"
                    _hover={{ color: "gray.400" }}
                  >
                    Tokens <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>#freedom</MenuItem>
                    <MenuItem>#india</MenuItem>
                    <MenuDivider />
                    <MenuItem>#Nepal</MenuItem>
                    <MenuItem>#forest</MenuItem>
                  </MenuList>
                </Menu>
              </GridItem>
            </Grid>
            </Box>
            <Button w="100%">Connect Wallet</Button>
        </VStack>
      </Box>
    </Box>
  );
}
