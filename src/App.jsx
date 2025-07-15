import { Route, Routes, useLocation, useNavigate } from "react-router";
import {
  AboutUsPage,
  AllProductsPage,
  HomePage,
  NotFoundPage,
  ProductDetailsPage,
  FavouritesPage,
  ShippingPage,
  ReturnPage,
  GarantPage,
  CatalogPage,
  BasketPage,
  BlogPage,
  ContactsPage,
} from "./pages";
import { MainLayout, MainLayoutTwo } from "./layout";
import { useEffect } from "react";

function App() {
  const navigation = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigation.pathname])
  

  return (
    <MainLayout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/return" element={<ReturnPage />} />
        <Route path="/garant" element={<GarantPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products-details" element={<ProductDetailsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
