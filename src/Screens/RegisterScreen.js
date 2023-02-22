import React from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Pressable,
  Text,
  VStack,
  Image,
} from "native-base";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../color";
function RegisterScreen({ navigation }) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>SIGN UP</Heading>
        <VStack space={5} pt="6">
          {/* Username */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="Hoang Loc"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
          />
          {/* Email */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
          />
          {/* Pass */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="*******"
            w="70%"
            type="password"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={() => navigation.navigate("Bottom")}
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
