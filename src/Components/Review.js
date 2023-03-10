import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../color";
import Ratiing from "./Ratiing";
import Message from "./Notfications/Message";
import Buttone from "./Buttone";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THIS IS NO REVIEW */}
      {/* <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={"NO REVIEW"}
      /> */}
      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Ratiing value={4} />
        <Text mb={2} fontSize={11}>
          Jan 12 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={"Nike is good."}
        />
      </Box>
      {/* WRITED REVIEW */}
      {/* <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreenx,
                endIcon: <CheckIcon size={4} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              style={{ marginTop: -50 }}
              placeholder="This product is good ......"
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttone>
          <Message
            color={Colors.white}
            bg={Colors.black}
            size={10}
            children={"Please 'Login' to write a review"}
          />
        </VStack>
      </Box> */}
    </Box>
  );
}
