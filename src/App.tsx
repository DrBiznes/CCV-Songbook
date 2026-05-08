import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./routes/Home";
import { SongsList } from "./routes/SongsList";
import { SongView } from "./routes/SongView";
import { CategoriesList } from "./routes/CategoriesList";
import { CategoryView } from "./routes/CategoryView";
import { Search } from "./routes/Search";
import { About } from "./routes/About";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<SongsList />} />
        <Route path="/song/:slug" element={<SongView />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/category/:slug" element={<CategoryView />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Not found</h1>
              <p className="muted">That page doesn't exist.</p>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}
