import styled from "styled-components"

export const ListContainer = styled.div`
    text-align: center;
    padding: 15px;
    & h1{
        margin-top: 15px;
        font-size: 25px;
        font-weight: bold;
    }
    & > .employee_info{
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border: 1px solid black;
        border-radius: 5px;
        padding: 1.5rem 0;
        margin: 0 2rem;
        margin-top: 3rem;
        & h2{
            font-weight: 500;
            font-size: 20px;
        }
    }
    .info_date_container{
            margin-top: 1rem;
    }
    &  p{
        margin-top: 5px;
        font-size: 18px;
    }
    @media (min-width: 768px) {
        & > .employee_info{
            flex-direction: row;
            height: 110px;
        }
        .info_date_container{
            margin-top: 0;
        }
    }
`