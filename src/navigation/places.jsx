import { ContactDetailScreen, ContactListScreen, MapsScreen, NewContactScreen } from "../screens/index";
import { Platform, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ContactsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Contacts"
        component={ContactListScreen}
        options={({ navigation }) => ({
          title: "Personas",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewContact")}>
              <Ionicons name="add-circle-outline" size={14} color={colors.white} >Nueva Persona</Ionicons>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ContactDetail"
        component={ContactDetailScreen}
        options={{ title: "Detalles de contacto" }}
      />
      <Stack.Screen
        name="NewContact"
        component={NewContactScreen}
        options={{ title: "Nueva persona" }}
      />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: "Mapa" }} />
    </Stack.Navigator>
  );
};

export default ContactsNavigator;