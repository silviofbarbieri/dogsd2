import styled from 'styled-components';

import ViewUrl from '../../assets/view.svg';
import ViewBlackUrl from '../../assets/view-black.svg';
import CommentsUrl from '../../assets/comments.svg';

export const MainContainer = styled.div`
  margin-top: 2rem;
`;

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  display: flex;
  z-index: 1000;
  padding: 2rem auto;
`;

export const PhotoContent = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.4s forwards;

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }

  @media (max-width: 40rem) {
    margin: auto 2rem;
  }

  @media (max-width: 20rem) {
    margin: auto 0.6rem;
  }
`;

export const PhotoImg = styled.div`
  grid-row: 1/4;

  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;

export const Details = styled.div`
  padding: 2rem 2rem 0 2rem;

  ul {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  li {
    margin-right: 2rem;
  }

  li:before {
    content: '';
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    margin-top: 5px;
    position: relative;
    top: 3px;
    width: 2px;
    background: #333;
  }
`;

export const Author = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:hover {
    text-decoration: underline;
  }
`;

export const Views = styled.span`
  &:before {
    display: inline-block;
    content: '';
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${ViewBlackUrl});
  }
`;

export const PhotosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const Photo = styled.li`
  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  span.spanWrapper {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    grid-area: 1/1;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    opacity: 0;
    transition: opacity 0.3s;
    gap: 0.8rem;
  }

  img {
    grid-area: 1/1;
  }

  &:hover span {
    opacity: 1;
  }
`;

export const ViewsSpan = styled.span`
  &::before {
    width: 16px;
    height: 10px;
    content: '';
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${ViewUrl}) no-repeat;
  }
`;

export const CommentsSpan = styled.span`
  &::before {
    width: 16px;
    height: 16px;
    content: '';
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${CommentsUrl}) no-repeat;
  }
`;

export const CommentContainer = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  @media (max-width: 64rem) {
    min-height: 10rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem 1rem 1.4rem 1rem;

  div {
    margin-bottom: 0;
  }

  input {
    box-sizing: border-box;
  }

  button {
    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0.2rem 1rem 0 1rem;
    overflow: hidden;
    outline: none;
  }

  button:focus svg path,
  button:hover svg path {
    fill: #fea;
    stroke: #fb1;
  }

  button:focus svg g,
  button:hover svg g {
    animation: woof 0.6s infinite;
  }

  @keyframes woof {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
