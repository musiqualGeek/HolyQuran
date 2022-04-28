import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, KeyboardAvoidingView, Platform, View } from "react-native";
import { store } from "./app/redux/createStore";
import { Provider } from "react-redux";
import Main from "./app/screens/Main";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Main />
        </KeyboardAvoidingView>
      </Provider>
    </View>
  );
};

export default App;
