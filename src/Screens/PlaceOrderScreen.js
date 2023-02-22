import React from "react";
import { Text, View, Box, ScrollView, Heading } from "native-base";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderIterm from "../Components/OrderIterm";
import PlaceOrderMethod from "../Components/PlaceOrderMethod";

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Admin Loc"
            text="amdin@gmail.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shippng: Anh"
            text="Pay method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Adress:"
            text="Quận 9 , TP HCM , VN"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Iterm */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderIterm />
        {/* Total */}
        <PlaceOrderMethod />
      </Box>
    </Box>
  );
}

export default PlaceOrderScreen;
