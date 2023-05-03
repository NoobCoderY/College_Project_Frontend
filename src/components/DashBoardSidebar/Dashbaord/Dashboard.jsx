import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import API_HOST from "../../../env";
import "./Dashbaord.css";
export default function Dashboard() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`${API_HOST}/users/stats`, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        setData(res.data?.success?.data);
      });
  }, []);
  const navigate = useNavigate();

  return (
    <div style={{ height: "calc( 100vh - 4vw)" }} className="ScrollTable">
      <div className="Dashbaorddataboxes">
        <div className="profiledetailstitle">Users</div>
        <div className="DashbaordBoxes">
          <div
            onClick={() => {
              navigate("/dashbaord/users");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Total Users</div>
            <div className="dashbaorddatatagvalue">{data?.allUser}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/users");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Verified Users</div>
            <div className="dashbaorddatatagvalue">{data?.verifiedUser}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/catalogue");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Certified Users</div>
            <div className="dashbaorddatatagvalue">{data?.certifiedUser}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/users");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Virtual Assistant</div>
            <div className="dashbaorddatatagvalue">{data?.totaleliteUser}</div>
          </div>
        </div>
      </div>

      <div className="Dashbaorddataboxes">
        <div className="profiledetailstitle">Blogs</div>
        <div className="DashbaordBoxes">
          <div
            onClick={() => {
              navigate("/dashbaord/blogs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Total Blogs</div>
            <div className="dashbaorddatatagvalue">{data?.allBlogs}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/blogs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag"> published Blogs</div>
            <div className="dashbaorddatatagvalue">{data?.publishedBlogs}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/blogs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag"> Recent Blogs</div>
            <div className="dashbaorddatatagvalue">{data?.recentBlogs}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/blogs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Trending Blogs </div>
            <div className="dashbaorddatatagvalue">{data?.trendingBlogs}</div>
          </div>
        </div>
      </div>
      <div className="Dashbaorddataboxes">
        <div className="profiledetailstitle">Website & Products</div>
        <div className="DashbaordBoxes">
          <div
            onClick={() => {
              navigate("/dashbaord/jobs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Total Website</div>
            <div className="dashbaorddatatagvalue">{data?.totalWebsites}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/jobs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag"> Total Buying Products </div>
            <div className="dashbaorddatatagvalue">{data?.totalWebModel}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/jobs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Total Products </div>
            <div className="dashbaorddatatagvalue">{data?.totalProducts}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/jobs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Total Public Products</div>
            <div className="dashbaorddatatagvalue">
              {data?.totalPublicProducts}
            </div>
          </div>
        </div>
      </div>

      <div className="Dashbaorddataboxes">
        <div className="profiledetailstitle">Kart & Orders</div>
        <div className="DashbaordBoxes">
          <div
            onClick={() => {
              navigate("/dashbaord/jobs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Total Orders</div>
            <div className="dashbaorddatatagvalue">{data?.totalOrders}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/jobs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Completed Orders </div>
            <div className="dashbaorddatatagvalue">
              {data?.totalCompletedOrders}
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/jobs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Pending Orders</div>
            <div className="dashbaorddatatagvalue">
              {data?.totalPendingOrders}
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/jobs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Cancelled Orders</div>
            <div className="dashbaorddatatagvalue">
              {data?.totalCancelledOrders}
            </div>
          </div>
        </div>
      </div>

      <div className="Dashbaorddataboxes">
        <div className="profiledetailstitle">Contact Us And Query</div>
        <div className="DashbaordBoxes">
          <div
            onClick={() => {
              navigate("/dashbaord/contactUs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Total Query</div>
            <div className="dashbaorddatatagvalue">{data?.contactedUs}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/contactUs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag"> Pending Query</div>
            <div className="dashbaorddatatagvalue">{data?.pendingContacts}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/contactUs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag"> processing Query </div>
            <div className="dashbaorddatatagvalue">
              {data?.processedContacts}
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/contactUs");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag"> Completed Query</div>
            <div className="dashbaorddatatagvalue">
              {data?.completedContact}
            </div>
          </div>
        </div>
      </div>
      <div className="Dashbaorddataboxes">
        <div className="profiledetailstitle">Category</div>
        <div className="DashbaordBoxes">
          <div
            onClick={() => {
              navigate("/dashbaord/category");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Total Category</div>
            <div className="dashbaorddatatagvalue">{data?.allCategory}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/category");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Popular Category</div>
            <div className="dashbaorddatatagvalue">{data?.popularCategory}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/category");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">Total Invoice</div>
            <div className="dashbaorddatatagvalue">{data?.totalInvoice}</div>
          </div>
          <div
            onClick={() => {
              navigate("/dashbaord/category");
            }}
            className="dashbairddqatabox"
          >
            <div className="dashbaorddatatag">--</div>
            <div className="dashbaorddatatagvalue">--</div>
          </div>
        </div>
      </div>
    </div>
  );
}
