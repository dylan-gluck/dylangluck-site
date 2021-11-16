import "../styles/app.scss";
import MouseContextProvider from "../context/mouseContext";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <MouseContextProvider>
      <AnimateSharedLayout>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </MouseContextProvider>
  );
}

export default MyApp;
