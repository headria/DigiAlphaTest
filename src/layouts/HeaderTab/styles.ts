import styled from "styled-components";
export const TabContainer = styled.ul`
  .profile-header-tab {
    position: relative;
  }

  .profile-header-tab {
    background: #fff;
    list-style-type: none;
    margin: -10px 0 0;
    padding: 0 0 0 140px;
    white-space: nowrap;
    border-radius: 0;
  }

  .profile-header-tab > li {
    display: inline-block;
    margin: 0;
  }

  .profile-header-tab > li > button {
    display: block;
    color: #929ba1;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 20px;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: 700;
    font-size: 12px;
    &:hover {
      background-color: #1f2431;
    }
  }

  .profile-header-tab > li.active > button,
  .profile-header-tab > li > button.active {
    color: #242a30;
  }

  .tab-content,
  .tab-pane {
    background: 0 0;
  }
`;
