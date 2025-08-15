import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { AuthProvider } from './contexts/AuthContext';
import AppLayout from './components/AppLayout';
import Index from './pages/Index';
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import CreatorProfile from "./pages/CreatorProfile";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Forum from "./pages/Forum";
import HelpCenter from "./pages/HelpCenter";
import Live from "./pages/Live";
import SellerGuide from "./pages/SellerGuide";
import Subscription from "./pages/Subscription";
import Tutorials from "./pages/Tutorials";

const App: React.FC = () => (
  <AuthProvider>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="products" element={<Products />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="creator/:id" element={<CreatorProfile />} />
            <Route path="contact" element={<Contact />} />
            <Route path="forum" element={<Forum />} />
            <Route path="help" element={<HelpCenter />} />
            <Route path="live" element={<Live />} />
            <Route path="seller-guide" element={<SellerGuide />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="tutorials" element={<Tutorials />} />
          </Route>
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppProvider>
  </AuthProvider>
);

export default App;