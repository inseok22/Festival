import styled from "styled-components";
import { media } from '../MediaQ';

export const NoticeBanner = styled.div`
  background-color: #dbeafe;
  border-left: 10px solid #3b82f6;
  color: #1e40af;
  display: flex;
  aling-items: center;
  border-radius: 0 0.25rem 0.25rem 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-size: 30px;
  font-weight: bold;

  ${media.mobile} {
    font-size: 20px;
  }
`;

export const Second = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 30px;

  ${media.mobile} {
    font-size: 15px;
  }
`;