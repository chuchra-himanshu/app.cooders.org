import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { STYLE_CONSTANTS } from "../../constants";
import { Logo } from "../../elements";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const COLORS = STYLE_CONSTANTS.COLORS;

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ width: "15%" }}>
          <SimpleLineIcons name="menu" size={24} color={COLORS.ACCENT} />
        </TouchableOpacity>
        <Logo />
        <View style={{ width: "15%", alignItems: "flex-end" }}>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome6
              name="user-large"
              size={17}
              color={COLORS.ACCENT}
              style={{ marginTop: -1 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BG,
    color: COLORS.PRIMARY_TEXT,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginInline: "auto",
    backgroundColor: COLORS.ACCENT_BG,
    height: 70,
    paddingInline: 14,
    borderRadius: 10,
  },
  icon: {
    height: 38,
    width: 38,
    borderRadius: 999,
    backgroundColor: COLORS.ACCENT_ICON_BG,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});
