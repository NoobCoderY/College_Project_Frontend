import axios from "axios";
import React, { useEffect, useState } from "react";
import API_HOST from "../../../../env";
import "./Bank.css";
import BankCard from "./BankCard";
export default function BankDetail({ user }) {
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/users/viewAccViaAdmin?pageSize=1000&pageNumber=1&userName=${user?.userName}`,
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setArrayofbankdetail(res.data?.success?.data);
      });
  }, [user]);

  const [arrayofbankdetail, setArrayofbankdetail] = useState([]);
  const [primaryAccount, setPrimaryAccount] = useState();

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/users/viewPrimaryViaAdmin?pageSize=1000&pageNumber=1&userName=${user?.userName}`,
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setPrimaryAccount(...res.data?.success?.data);
      });
  }, [user]);

  return (
    <div>
      <div
        style={{ padding: "1vw 3vw", width: "fit-content", margin: "0" }}
        className="navoftableblogs"
      >
        List Of Bank Details
      </div>
      <div style={{ padding: "1vw" }} className="flexbanakcards">
        {arrayofbankdetail?.map((data, index) => {
          return (
            <BankCard
              setArrayofbankdetail={setArrayofbankdetail}
              data={data}
              primaryAccount={primaryAccount}
            />
          );
        })}
      </div>
    </div>
  );
}
