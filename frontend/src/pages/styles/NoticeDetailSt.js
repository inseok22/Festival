import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #333;
  border-bottom: 3px solid #4285f4;
  padding-bottom: 10px;
`;

export const MetaInfo = styled.div`
  color: #666;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  line-height: 1.6;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
  display: inline-block;

  &: hover {
    background-color: #3367d6;
  }
`;