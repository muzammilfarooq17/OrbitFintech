import AppRoutes from './routes/AppRoutes'; // Import your route manager
import { AuthProvider } from '../src/components/context/AuthContext'; // Context import kiya

const App = () => {
  return (
    <AuthProvider>
      {/* AppRoutes acts as your master controller. It has the Router, the Navbar, and the Footer all inside it! */}
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;