import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: #1a202c;
  color: white;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  justify-content: center;
  
  // border: 3px solid white;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const TabList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TabButton = styled.button`
  padding: 0.5rem;
  background-color: ${props => props.active ? '#3182ce' : 'transparent'};
  border: 1px solid #4a5568;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;

  &:hover {
    background-color: #4a5568;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  // border: 3px solid white;
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  background-color: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 15px;
  color: white;
  width: 95%;
`;

export const Select = styled.select`
  padding: 0.5rem;
  background-color: #2d3748;
  border: 1px solid #4a5568;
  font-size: 15px;
  color: white;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  width: 200px;
  font-size: 15px;
  
  // border: 3px solid white;

  &:hover {
    background-color: #3182ce;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;

  // border: 3px solid white;
`;