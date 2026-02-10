
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import Internship from "./pages/Internship";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/over-mij" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostDetail />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
