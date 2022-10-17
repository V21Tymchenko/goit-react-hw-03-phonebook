import styled from 'styled-components';

import { space, layout } from 'styled-system';
export const Box = styled('div')(
  {
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '600px',
  },
  space,
  layout
);

export const Phonebook = styled.h1`
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: 36px;
  text-align: center;
  line-height: 1.5;
`;
export const Contacts = styled.h2`
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: 32px;
  text-align: center;
  line-height: 1.5;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
