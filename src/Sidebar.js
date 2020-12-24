import Channels from './Channels'
import People from './People'
import styled from 'styled-components'


const Style = styled.div`
  background-color: #344875;
  color: white;
  max-width: 250px;

  p {
    margin: 3px 5px 3px 20px;
  }
`;

const Sidebar = () => {
  return (
    <Style>
      <Channels />
      <People />
    </Style>
  );
};

export default Sidebar;
