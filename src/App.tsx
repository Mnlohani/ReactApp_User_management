import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/shared/component/layout";
import { UserEdit } from "./route/user-edit/page/UserEdit";
import { UserProfile } from "@/route/user-profile/page/UserProfile";
import { User } from "./route/user/page";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/profile/edit" element={<UserEdit />} />
          <Route path="/user/profile/:id" element={<UserProfile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
