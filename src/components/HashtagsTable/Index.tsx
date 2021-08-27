import React from "react";
import { Box, Text, Heading,Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export default function Index() {

    const tags = [
        {
            hashtag:"#freedom",
            price:23,
            APY:45,
            tokenAddress:"123"
        },
        {
            hashtag:"#Revenge",
            price:23,
            APY:45,
            tokenAddress:"456"
        },
        {
            hashtag:"#Ethereum",
            price:23,
            APY:45,
            tokenAddress:"789"
        },
        {
            hashtag:"#solana",
            price:23,
            APY:45,
            tokenAddress:"10923"
        },

    ]
  return (
    <Box>
      <Heading>#hashtags</Heading>
      <Table  variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>hashtag</Th>
            <Th >price</Th>
            <Th isNumeric>APY</Th>
            <Th >Trade</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tags.map(tag => {
              return (
                <Tr key={tag.tokenAddress}>
                <Td>{tag.hashtag}</Td>
                <Td>{tag.price}</Td>
                <Td isNumeric>{tag.APY}</Td>
                <Td>
                    <Button colorScheme="linkedin">Trade</Button>
                </Td>
              </Tr>
              )
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
