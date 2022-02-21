import styled from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1`
    color: #3a3a3a;
    font-size: 48px;
    line-height: 56px;
    margin-top: 80px;
    max-width: 450px;
`;

export const Form = styled.form`
    margin-top: 40px;
    width: 100%;
    max-width: 700px;
    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        &::placeholder{
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        border-radius: 0 5px 5px 0;
        background: #04d361;
        border:0;
        color: #fff;
        font-weight: bold;
        transition: 0.2s;

        &:hover{
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    width: 100%;
    max-width: 700px;
    a{
      background: #FFF;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
 
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
    
    div{
        margin-left: 16px;
        strong{
            font-size: 20px;
            color: #3D3D4D;
        }

        p{
            font-size: 18px;
            color:#a8a8b3;
            margin-top: 4px;
        }
    }
`