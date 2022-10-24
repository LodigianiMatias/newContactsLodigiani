import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { ImageSelector, LocationSelector } from "../../components";
import React, { useState } from "react";

import colors from "../../utils/colors";
import { savePlace } from "../../store/place.slice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const NewContact = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onHandleSubmit = () => {
    dispatch(savePlace(title, image, location));
    navigation.goBack();
  };

  const onHandlerImage = (imageUri) => {
    setImage(imageUri);
  };

  const onHandlerLocation = (location) => {
    setLocation(location);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nombre de contacto</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          onChangeText={onHandleChange}
          value={title}
        />
        <ImageSelector onImage={onHandlerImage} />
        <LocationSelector onLocation={onHandlerLocation} />
        <Button title="Guardar contacto" onPress={onHandleSubmit} color={colors.primary}/>
      </View>
    </ScrollView>
  );
};

export default NewContact;
