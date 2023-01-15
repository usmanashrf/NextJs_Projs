import { Box, HStack, Icon,StackProps,Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { MoneyBackGuaranteeIcon, NoSetupFeeIcon,MonthlySubIcon } from "./icons/icons";

interface FeatureProps extends StackProps{
    icon: ElementType;
}

function Feature(props: FeatureProps){
    const {icon,children, ...rest}= props;
    return(
        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxSize='48px'>
            </Icon>
            <Text textAlign={"left"} fontSize={"18px"} fontWeight={"700"}> {children}</Text>
        </HStack>
    )
}

export function Features(){
    return (
      <Box maxW={"1024px"} m="auto" pt="60px" pb="32px">
        <HStack px="48px" spacing={"20px"}>
          <Feature icon={MoneyBackGuaranteeIcon}>
            30 days money back Guarantee
          </Feature>
          <Feature icon={NoSetupFeeIcon}>
            No setup fees 100% hassle-free
          </Feature>
          <Feature icon={MonthlySubIcon}>
            No monthly subscription Pay once and for all
          </Feature>
        </HStack>
      </Box>
    );
}