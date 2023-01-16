'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import { Pricing } from './Pricing';
export function Header() {
    return (
      <Box as="section" pb='112'>
        <Box
          color="#F7FAFC"
          bg="#6B46C1"
          pt="90px"
          pb="198px"
          px="32px"
          textAlign="center"
        >
          <Heading fontWeight="800" fontSize={['3xl','3xl','5xl']} textAlign={['left','left','center']}>
            Simple pricing for your business
          </Heading>
          <Text fontWeight="500" fontSize={['lg','lg','2xl']} pt="16px" textAlign={['left','left','center']}>
            Plans that are carefully crafted to suit your business.
          </Text>
        </Box>
      </Box>
    );
  }