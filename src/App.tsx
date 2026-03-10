import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const AllProjectsPage = lazy(() => import("./components/AllProjectsPage"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <Router>
      <LoadingProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <MainContainer>
                <Suspense>
                  <CharacterModel />
                </Suspense>
              </MainContainer>
            } />
            <Route path="/projects" element={<AllProjectsPage />} />
          </Routes>
        </Suspense>
      </LoadingProvider>
    </Router>
  );
};

export default App;
