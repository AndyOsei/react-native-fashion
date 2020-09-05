import React from "react";
import { StyleSheet, Dimensions, Image } from "react-native";

import { Box, Text, RoundedIconButton } from "../../components";
import { theme } from "../../components/Theme";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
const aspectRatio = 3200 / 2400;
export const DRAWER_WIDTH = width * 0.8;
const height = width * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favourite Outfits",
    screen: "FavouriteOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notifications Settings",
    screen: "NotificationsSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

const Drawer = () => {
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          {...StyleSheet.absoluteFillObject}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          flexDirection="row"
          paddingTop="xl"
          paddingHorizontal="m"
          justifyContent="space-between"
        >
          <RoundedIconButton
            name="x"
            size={24}
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
          />
          <Text variant="body" color="white">
            MY PROFILE
          </Text>
          <RoundedIconButton
            size={24}
            name="shopping-bag"
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primary" />
        <Box
          {...StyleSheet.absoluteFillObject}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            top={-theme.spacing.xl}
            alignSelf="center"
            backgroundColor="primary"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical="l">
            <Text variant="title1" textAlign="center">
              Mike Peter
            </Text>
            <Text variant="body" textAlign="center">
              mike@flexingstudio
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.25}
      >
        <Image
          source={require("../../../assets/patterns/1.png")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: -height * (1 - 0.61),
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
