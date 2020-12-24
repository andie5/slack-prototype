import Sidebar from './Sidebar'
import MessageContent from './MessageContent'
import styled from 'styled-components'

const LayoutStyle = styled.div`
  display: flex;
  min-height: 100vh;

  & > * {
    flex-grow: 1;
  }
`;

const Layout = () => {
  return (
    <LayoutStyle>
      <Sidebar />
      <MessageContent />
    </LayoutStyle>
  );
};

export default Layout;
