/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import Flavors from "./pages/Flavors";
import Locator from "./pages/Locator";
import Culture from "./pages/Culture";
import About from "./pages/About";
import ElementsGuide from "./pages/ElementsGuide";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flavors" element={<Flavors />} />
          <Route path="locator" element={<Locator />} />
          <Route path="culture" element={<Culture />} />
          <Route path="about" element={<About />} />
          <Route path="guide" element={<ElementsGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
