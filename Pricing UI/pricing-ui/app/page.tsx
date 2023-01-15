'use client';
import { Header } from "./components/Header";
import { ChakraProvider } from '@chakra-ui/react';
import { Pricing } from "./components/Pricing";
import { Features } from "./components/features";

export default function Home(){
return(<ChakraProvider>
  <Header></Header>
  <Pricing></Pricing>
  <Features></Features>
</ChakraProvider>
)
}