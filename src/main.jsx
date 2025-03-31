import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./data/store/store.js";


const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
            <Notifications position="top-center" zIndex={9999} /> {/* ✅ Add this line */}
            <App />
          </MantineProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
