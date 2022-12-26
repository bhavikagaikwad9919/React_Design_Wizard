import { useMutation } from "@apollo/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { TaxamoSubscribe } from "../lib/contexts/Queries";

const TransactionP = styled.p`
  display: flex;
  justify-content: center;
  margin-left: 50%;
  margintop: 3rem;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Transaction = () => {
  const [taxamoData, setTaxamoData] = useState({});
  const [transactionMsg, setTransactionMsg] = useState("");
  const [taxamo] = useMutation(TaxamoSubscribe);
  const dispatch = useDispatch();
  const isPopupClosed = useSelector((state: any) => {
    return state.isPopupClosed;
  });

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    var url = window.location.href.split("=")[1];
    console.log("urlllll", url);
    await axios
      .get(`https://api.dwiz.io/api/users/taxamoTransaction/${url} `)
      .then((resp) => {
        console.log("response data", resp);
        if (resp.data) {
          var paymentResult = { payment_result: {} };
          paymentResult.payment_result = resp.data;
          setTaxamoData(paymentResult);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    console.log(taxamoData);
    var obj = Object.keys(taxamoData);
    obj.length > 0 && taxamoSubscribe();
  }, [taxamoData]);

  const taxamoSubscribe = async () => {
    console.log("if condition obj", taxamoData);

    await taxamo({
      variables: {
        input: JSON.stringify(taxamoData),
        token: `${localStorage.getItem("token")}`,
      },
    }).then((data) => {
      console.log("response transaction data", data);
      if (data.data.POST_users_me_taxamoSubscribe) {
        console.log("response transaction data iffff", data);
        setTransactionMsg("Transaction Completed successfully");
        // toast.success("Transaction Completed successfully");
        dispatch({
          type: "closePopup",
          isPopupClosed: false,
        });
      } else {
        setTransactionMsg("Transaction failed");
      }
    });
  };

  useEffect(() => {
    console.log("is popup closed", isPopupClosed);
  });
  return (
    <>
      {/* <ToastContainer /> */}
      <TransactionP>Transaction Completed successfully</TransactionP>
    </>
  );
};
