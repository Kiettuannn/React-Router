import './App.css';
import AllRoute from './components/AllRoute';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="blog" element={<Blog />}>
            <Route index element={<BlogAll />}></Route>
            <Route path="news" element={<BlogNews />}></Route>
            <Route path=":id" element={<BlogDetail />}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="info-user" element={<InfoUser />}></Route>
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Route>
      </Routes> */}

      <AllRoute></AllRoute>
    </>
  );
}

export default App;
