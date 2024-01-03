import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

//importing pages
import Home from './pages/Home';
import Copytrade from './pages/Copytrade';
import WhyMirrorExp from './pages/WhyMirrorExp';
import Regulations from './pages/Regulations';
import Contact from './pages/Contact';
import Traders from './pages/Traders';
import Label from './pages/Label';
import Insurance from './pages/Insurance';
import { Server } from 'lucide-react';
import Tools from './pages/Tools';
import Forex from './pages/Forex';
import Commodities from './pages/Commodities';
import Bonds from './pages/Bonds';
import Indices from './pages/Indices';
import Crypto from './pages/Crypto';
import Stocks from './pages/Stocks';
import Futures from './pages/Futures';
import Conditions from './pages/Conditions';
import Spreads from './pages/Spreads';
import Hours from './pages/Hours';
import Swap from './pages/Swap';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PasswordReset from './pages/passwordReset/PasswordReset';
import PricingPage from './pages/Pricing';
import { useEffect, useState } from 'react';
import PageLoader from './components/PageLoader';
import { contextData } from './context/AuthContext'
import UpdateProfile from './components/UpdateProfile';
import routes from './routes';
import Dashboard from './pages/Dashboard/Dashboard';
import DefaultLayout from './components/Layouts/DefaultLayout';

function App() {
  const [userData, setUserData] = useState(false);
  const { fetching, user } = contextData();



  useEffect(() => {
    if (!fetching) {
      setTimeout(() => {
        setUserData(true);
        console.log(fetching, user)
      }, 10000);
    }
  }, [fetching])



  if (!userData) {
    return (
      <PageLoader />
    );
  }

  if (userData) {
    return (
      <div className="App">
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerClassName="overflow-auto"
        />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/copytrade" element={<Copytrade />} />
            <Route path="/company/why" element={<WhyMirrorExp />} />
            <Route path="/company/regulations" element={<Regulations />} />
            <Route path="/company/contact" element={<Contact />} />
            <Route path="/company/traders" element={<Traders />} />
            <Route path="/company/label" element={<Label />} />
            <Route path="/company/insurance" element={<Insurance />} />
            <Route path="/company/servers" element={<Server />} />
            <Route path="/company/tools" element={<Tools />} />
            <Route path="/products/forex" element={<Forex />} />
            <Route path="/products/commodities" element={<Commodities />} />
            <Route path="/products/indices" element={<Indices />} />
            <Route path="/products/bonds" element={<Bonds />} />
            <Route path="/products/crypto" element={<Crypto />} />
            <Route path="/products/stocks" element={<Stocks />} />
            <Route path="/products/futures" element={<Futures />} />
            <Route path="/more/pricing" element={<PricingPage />} />
            <Route path="/more/conditions" element={<Conditions />} />
            <Route path="/more/spreads" element={<Spreads />} />
            <Route path="/more/hours" element={<Hours />} />
            <Route path="/more/swap" element={<Swap />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/:ref" element={<Register />} />
            <Route path="/password-reset" element={<PasswordReset />} />

            <Route path="/dashboard/" element={<DefaultLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard/home" element={<Dashboard />} />
              <Route path="/dashboard/updateProfile" element={<UpdateProfile />} />

                {routes.map((routes, i) => {
                  const { path, component: Component } = routes;
                  return (
                    <Route key={i} path={path} element={<Component />} />
                  );
                })}
            </Route>
          </Routes>
      </div>
    );
  }
}

export default App;
