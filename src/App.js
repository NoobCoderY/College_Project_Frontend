import "./App.css";
import "slick-carousel/slick/slick.css";
import "./components/footer/footer.css";
import "slick-carousel/slick/slick-theme.css";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRoute2 from "./ProtectedRoute2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashbaord from "./pages/Dashbaord/Dashbaord";
import Users from "./components/DashBoardSidebar/Users/Users";
import Users1 from "./components/DashBoardSidebar/Category/Users";
import { useDispatch, useSelector } from "react-redux";
import UserFullDetails from "./components/DashBoardSidebar/UserFullDetail/UserFullDetails";
import Blogs from "./components/DashBoardSidebar/Blogs/Blogs";
import Addblog from "./components/DashBoardSidebar/AddBlog/Addblog";
import BlogDetail from "./components/DashBoardSidebar/BlogDetail/BlogDetail";
import Editblog from "./components/DashBoardSidebar/EditBlog/Editblog";
import Chat from "./components/DashBoardSidebar/UserFullDetail/Chat/Chat";
import { useEffect, useState } from "react";
import { userActions } from "./store/userSlice";
import EditUser from "./components/DashBoardSidebar/EditUser/EditUser";
import AddCategory from "./components/DashBoardSidebar/AddCategory/AddCategory";
import EditCategory from "./components/DashBoardSidebar/AddCategory/EditCategory";
import Catalog from "./pages/Catalogs/Catalog";
import PortFolioDetail from "./components/PortfolioDetail/PortFolioDetail";
import Dashboard from "./components/DashBoardSidebar/Dashbaord/Dashboard";
import Invoice from "./components/DashBoardSidebar/Invoice/Invoice";
import ContactUs from "./components/DashBoardSidebar/ContactUs/ContactUs";
import AddFaq from "./components/DashBoardSidebar/AddFAQ/AddFaq";
import Faq from "./components/DashBoardSidebar/FAQ/Faq";
import EditFaq from "./components/DashBoardSidebar/AddFAQ/EditFaq";
import Catalogue from "./components/DashBoardSidebar/Catalogue/Catalogue";
import axios from "axios";
import API_HOST from "./env";
import Addblog2 from "./components/DashBoardSidebar/AddBlog copy/Addblog2";
import Editblog2 from "./components/DashBoardSidebar/EditBlog copy/Editblog2";
import Mywebsite from "./components/DashBoardSidebar/MyWebsite/Mywebsite";
import Products from "./components/DashBoardSidebar/Products/products";
import ProductDetailpage from "./components/DashBoardSidebar/ProductDetailPage/ProductDetailpage";
import BookCatalogues from "./components/DashBoardSidebar/BookCatalogues/BookCatalogues";
import DirectbuyDetails from "./components/DashBoardSidebar/DirectbuyDetail/DirectbuyDetails";
import CMS from "./components/DashBoardSidebar/CMS/CMS";
import Stories from "./components/DashBoardSidebar/Stories/Stories";
import ShowStory from "./components/DashBoardSidebar/Stories/ShowStory";
import AddStory from "./components/DashBoardSidebar/AddStory/AddStory";
import EditStory from "./components/DashBoardSidebar/AddStory/EditStory";
import Directbuy from "./components/DashBoardSidebar/BuyingList/Directbuy";
import CreateWork from "./components/DashBoardSidebar/CreateWork/CreateWork";
import Jobdetail1 from "./components/DashBoardSidebar/AppliedJobDetail/Jobdetail1";
import ProposalDetail from "./components/DashBoardSidebar/Proposaldetail/ProposalDetail";



function LayoutsWithNavbar() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const { loggedInStatus } = useSelector((state) => state.user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      axios
        .get(`${API_HOST}/tokenVerify`, {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          dispatch(
            userActions.setUser({
              user: { ...res.data.success.data },
            })
          );
        })
        .catch(() => {
          window.localStorage.removeItem("user");
          window.localStorage.removeItem("token");
          window.location.pathname = "/";
          dispatch(userActions.removeUser());
        });
    }
  }, [loggedInStatus]);

  const [width, setWidth] = useState(window.innerWidth);

  //FUNCTIONS
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                auth={
                  JSON.parse(localStorage.getItem("user"))?.fullName
                    ? true
                    : false
                }
              >
                <LayoutsWithNavbar />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route
            path="/dashbaord"
            element={
              <ProtectedRoute2
                auth={
                  JSON.parse(localStorage.getItem("user"))?.fullName
                    ? true
                    : false
                }
              >
                <Dashbaord />
              </ProtectedRoute2>
            }
          >
            <Route path="/dashbaord" element={<Dashboard />} />
            <Route path="/dashbaord/contactUs" element={<ContactUs />} />
            <Route path="/dashbaord/users" element={<Users />} />
            <Route path="/dashbaord/blogs" element={<Blogs />} />
            <Route path="/dashbaord/" element={<Blogs />} />
            <Route path="/dashbaord/addBlog" element={<Addblog />} />
            <Route path="/dashbaord/addBlog2" element={<Addblog2 />} />
            <Route path="/dashbaord/cms" element={<CMS />} />
            <Route path="/dashbaord/addstory" element={<AddStory />} />
            <Route path="/dashbaord/editstory/:id" element={<EditStory />} />
            <Route path="/dashbaord/story" element={<Stories />} />
            <Route path="/dashbaord/story/:id" element={<ShowStory />} />

            <Route
              path="/dashbaord/products"
              element={<Products width={width} />}
            />
            <Route
              path="/dashbaord/product/:name/:id"
              element={<ProductDetailpage width={width} />}
            />
            <Route
              path="/dashbaord/edituser/:userName"
              element={<EditUser />}
            />
            <Route path="/dashbaord/editBlog/:Id" element={<Editblog />} />
            <Route path="/dashbaord/editBlog2/:Id" element={<Editblog2 />} />
            <Route path="/dashbaord/blog/:Id" element={<BlogDetail />} />
            <Route
              path="/dashbaord/portfolio/:portId"
              element={<PortFolioDetail />}
            />

            <Route
              path="/dashbaord/:userName/:type"
              element={<UserFullDetails />}
            />

            <Route path="/dashbaord/chat" element={<Chat />} />

            <Route
              path="/dashbaord/proposals"
              element={<CreateWork width={900} />}
            />
            <Route
              path="/dashbaord/jobdetail/:id"
              element={<ProposalDetail width={900} />}
            />
            <Route
              path="/dashbaord/applieddetail/:id"
              element={<Jobdetail1 width={width} />}
            />

            <Route
              path="/dashbaord/Buying-List"
              element={<Directbuy width={width} />}
            />

            <Route path="/dashbaord/category" element={<Users1 />} />
            <Route path="/dashbaord/catalogue" element={<Catalogue />} />

            <Route path="/dashbaord/addcategory" element={<AddCategory />} />
            <Route
              path="/dashbaord/editcategory/:id"
              element={<EditCategory />}
            />
            <Route path="/dashbaord/addfaq" element={<AddFaq />} />
            <Route path="/dashbaord/editfaq/:id" element={<EditFaq />} />
            <Route path="/dashbaord/faq" element={<Faq />} />
            <Route
              path="/dashbaord/invoice"
              element={<Invoice width={width} />}
            />
            <Route
              path="/dashbaord/direct-buy-details/:id"
              element={<DirectbuyDetails width={width} />}
            />
            <Route
              path="/dashbaord/catalogue/:catId"
              element={<Catalog width={width} />}
            />

            <Route
              path="/dashbaord/bookcatalogue"
              element={<BookCatalogues width={width} />}
            />

            <Route
              path="/dashbaord/my-website/:name/:id"
              element={<Mywebsite width={width} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
