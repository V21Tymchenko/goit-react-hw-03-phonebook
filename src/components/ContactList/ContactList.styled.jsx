import styled from 'styled-components';

export const ContactListUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
`;
export const ContactItem = styled.li`
  display: flex;
  font-family: Noto Sans, sans-serif;
  font-size: 14px;
  text-align: center;
  justify-content: space-between;
`;

export const ContactName = styled.span`
  margin-right: 15px;
  font-weight: 600;
`;
export const ContactNumer = styled.span`
  margin-right: 50px;
`;
export const FindContactButton = styled.button`
  padding: 4px 20px;
  border: 2px solid #0084ff;
  border-radius: 4px;
  background-color: #4a8dff57;
  box-shadow: 0 0 5px #000, inset 0 1px 8px -2px #0000ff5e;
  :hover,
  :focus {
    box-shadow: 0 0 0 #000, inset 0 1px 2px -2px #0000ff5e;
    background-color: #ffffff;
  }
`;
export const ListItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;
