import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #1a202c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 500px;
  max-width: 400px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  height: 40px;
  border-radius: 15px;
`;

export const Tab = styled.button`
  flex: 1;
  padding: 0.5rem;
  background-color: ${props => props.active ? '#3182ce' : 'transparent'};
  color: ${props => props.active ? 'white' : '#a0aec0'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${props => props.active ? '#3182ce' : '#2d3748'};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 95%;
  padding: 1rem;
  background-color: #2d3748;
  color: white;
  border: 1px solid #4a5568;
  border-radius: 0.25rem;

  &:focus {
    outline: none;
    border-color: #3182ce;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  color: #a0aec0;
  font-size: 0.875rem;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c5282;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Link = styled.a`
  color: #63b3ed;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 15px;
  color: red;
  margin: 0;

  // border: 3px solid white;
`;