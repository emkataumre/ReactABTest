import { FC, useEffect } from "react";
import { useABTestingStore } from "./stores/ABTestingStore";
import { Layout } from "./components/Layout";
import { PageA } from "./pages/PageA";
import { PageB } from "./pages/PageB";

const App: FC = () => {
  const ABVersion = useABTestingStore((state) => state.version);
  const setABVersion = useABTestingStore((state) => state.setVersion);

  useEffect(() => {
    if (ABVersion === null) {
      const version = Math.random() < 0.5 ? "a" : "b";
      setABVersion(version);
    }
  }, []);
  return <Layout>{ABVersion === "a" ? <PageA /> : <PageB />}</Layout>;
};

export default App;
