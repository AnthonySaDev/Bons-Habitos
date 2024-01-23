import React from "react";
import { Image, View } from "react-native";
import { Screen } from "../../components/Screen/Screen";
import { Box } from "../../components/Box/Box";
import { Text } from "../../components/Text/Text";
import { Icon } from "../../components/Icon/Icon";
import { StatusCard } from "../../components/StatusCard/StatusCard";
import { NewSnackCard } from "../../components/NewSnackCard/NewSnackCard";

export function HomeScreen() {
  return (
    <Screen>
      <Box
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Icon name="logo" />
        <View style={{ borderWidth: 3, borderColor: "black", borderRadius: 50 }}>
        <Image
          source={{ uri: "https://github.com/AnthonySaDev.png" }}
          width={50}
          height={50}
          borderRadius={50}
        />
        </View>
      </Box>
      <StatusCard />
      <NewSnackCard />
    </Screen>
  );
}
