// import Navbar from "./components/layout/Navbar"
// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }

// export default App
import AppRoutes from './routes/AppRoutes'; // Import your route manager

const App = () => {
  return (
    <>
      {/* AppRoutes acts as your master controller. It has the Router, the Navbar, and the Footer all inside it! */}
      <AppRoutes />
    </>
  );
};

export default App;