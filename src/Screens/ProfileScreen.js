import React from "react";
import { Center, Heading, Image, Text, View } from "native-base";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";
function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMethod="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Loc
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      {/* TAB */}
      <Tabs />
    </>
  );
}

export default ProfileScreen;
