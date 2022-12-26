import { Button } from "@material-ui/core";
import { isSet } from "lodash";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { ReactComponent as Cross } from "../../../assets/svg/cross.svg";

const Heading = styled.div`
  background: #8679a9;
  color: white;
  text-align: center;
  height: 23px !important;
  display: flex;
  justify-content: center;
`;
export const Cookies = (props: any) => {
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    console.log("cookieconsent.status", cookieconsent.status);
    var sourceValue;
    const referrerValue =
      document && document.referrer
        ? document.referrer.split("?")[0]
        : "(direct)";
    console.log("referrerValue", referrerValue);

    const matches = referrerValue.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i);
    sourceValue = (matches && matches[1]) || "(direct)";

    const expireDate = new Date();
    setCookie("dw-referrer", referrerValue);
    setCookie("dw-source", sourceValue);
  }, []);

  return (
    <>
      {/* Comment below code because in index.html file cookies are shown*/}
      {/* {isSet && (
        <Heading>
          <div>
            This website uses cookies to ensure you get the best experience on
            our website.{" "}
            <a
              href="https://www.designwizard.com/privacy/"
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "white",
              }}
              target="_blank"
            >
              Learn more
            </a>
          </div>
          <div style={{ position: "absolute", right: 0 }}>
            <Button
              onClick={() => {
                setIsSet(false);
                setCookie("dw-referrer", "");
                setCookie("dw-source", "");
              }}
            >
              <Cross style={{ height: "1.2rem", color: "white" }}></Cross>
            </Button>
          </div>
        </Heading>
      )} */}
    </>
  );
};
