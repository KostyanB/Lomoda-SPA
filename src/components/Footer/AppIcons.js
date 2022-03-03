import React from "react";
import styled from "styled-components";
import { ColumnIcons } from "./FooterElems";
import { ReactComponent as GooglePay } from "../../image/icon-googleplay.svg";
import { ReactComponent as AppStore } from "../../image/icon-appstore.svg";
import { ReactComponent as HuaweiStore } from "../../image/icon-huaweistore.svg";

const ColumnIconsApp = styled(ColumnIcons)`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
`;

const AppIcons = () => (
  <ColumnIconsApp>
    <AppStore />
    <GooglePay />
    <HuaweiStore />
  </ColumnIconsApp>
);
export default AppIcons;
