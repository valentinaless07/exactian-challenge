import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  & > .dni_container {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    & > h1 {
      font-weight: bold;
      font-size: 25px;
      line-height: 1.2;
    }
    & > input {
      border: 1px solid black;
      margin-top: 25px;
      padding: 12px 16px;
      border-radius: 5px;
    }
  }
  & > .buttons_container {
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 25px;
    font-size: 20px;
    & input{
        border-radius: 4px;
        border: 1px solid #555555;
        padding: 0.5rem;
    }
    & > div {
      height: 325px;
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      border: 1px solid gray;
      border-radius: 5px;
      background-color: white;
      padding: 0 10px;
      & > button {
        background-color: #323232;
        padding: 8px 16px;
        cursor: pointer;
        border-radius: 5px;
        color: white;
        font-size: 16px;
      }
      & > button:hover {
        background-color: #555555;
      }
    }

    & > .exit_container {
      margin-top: 35px;
    }
    @media (min-width: 768px) {
      flex-direction: row;
      & > .exit_container {
        margin-top: 0;
      }
      .dni_container > h1{
        line-height: normal;
      }
    }
  }
`;
