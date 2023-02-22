import React from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  ScrollView,
  Text,
  View,
} from "native-base";
import Colors from "../color";
import CartEmpty from "../Components/CartEmpty";
import CartIterms from "../Components/CartIterms";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

function CartScreen() {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeArea bg={Colors.subGreen}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* IF CART IS EMPTY */}
      {/* <CartEmpty /> */}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartIterms />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $345
            </Button>
          </HStack>
        </Center>
        {/* checkout */}
        <Center px={5}>
          <Buttone
            onPress={() => navigation.navigate("Ship")}
            bg={Colors.black}
            color={Colors.white}
            mt={10}
          >
            CHECKOUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;
