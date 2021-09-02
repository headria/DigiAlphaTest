import styled from "styled-components";
import { colors } from "src/styles/colors";
export const HeaderStyle = styled.div`
  position: relative;
  overflow: hidden;

  .profile-header-cover {
    background-image: url("https://bootdey.com/img/Content/bg1.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .profile-header-cover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.75) 100%
    );
  }

  .profile-header-content {
    position: relative;
    color: #fff;
    padding: 25px;
  }

  .profile-header-img {
    float: left;
    width: 120px;
    height: 120px;
    overflow: hidden;
    position: relative;
    z-index: 10;
    margin: 0 0 20px;
    padding: 3px;
    border-radius: 4px;
    background: #fff;
  }

  .profile-header-img img {
    max-width: 100%;
  }

  .profile-header-info h4 {
    font-weight: 500;
    color: #fff;
  }

  .profile-header-img + .profile-header-info {
    margin-left: 140px;
  }

  .profile-content {
    padding: 25px;
    border-radius: 4px;
  }

  .profile-content:after,
  .profile-content:before {
    content: "";
    display: table;
    clear: both;
  }

  .profile-left {
    width: 200px;
    float: left;
  }

  .profile-right {
    margin-left: 240px;
    padding-right: 20px;
  }

  .profile-image {
    height: 175px;
    line-height: 175px;
    text-align: center;
    font-size: 72px;
    margin-bottom: 10px;
    border: 2px solid #e2e7eb;
    overflow: hidden;
    border-radius: 4px;
  }

  .profile-image img {
    display: block;
    max-width: 100%;
  }

  .profile-highlight {
    padding: 12px 15px;
    background: #fefde1;
    border-radius: 4px;
  }

  .profile-highlight h4 {
    margin: 0 0 7px;
    font-size: 12px;
    font-weight: 700;
  }

  .profile-section + .profile-section {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #b9c3ca;
  }

  .profile-section:after,
  .profile-section:before {
    content: "";
    display: table;
    clear: both;
  }

  .profile-section .title {
    font-size: 20px;
    margin: 0 0 15px;
  }

  .profile-section .title small {
    font-weight: 400;
  }
`;
