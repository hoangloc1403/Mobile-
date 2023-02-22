import {
  Box,
  Center,
  FormControl,
  HStack,
  Input,
  ScrollView,
  Text,
  VStack,
  Image,
  Spacer,
} from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

const paymentMethodes = [
  {
    image: require("../../assets/images/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/images/momo.png"),
    alt: "momo",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/images/zalopay.png"),
    alt: "zalopay",
    icon: "fontAwesome",
  },
];
function PaymentScreen() {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Selection */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethodes.map((i, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    source={i.image}
                    alt="paypal"
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}

            <Buttone
              onPress={() => navigation.navigate("Paceorder")}
              bg={Colors.main}
              color={Colors.white}
              mt={5}
            >
              CONTINUE
            </Buttone>
            <Text italic textAlign="center">
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
