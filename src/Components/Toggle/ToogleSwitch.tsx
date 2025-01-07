import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ isOn: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isOn ? '#2f54eb' : '#ccc')};
  transition: 0.4s;
  border-radius: 25px;

  &::before {
    position: absolute;
    content: '';
    height: 19px;
    width: 19px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) =>
      props.isOn ? 'translateX(24px)' : 'translateX(0)'};
  }
`;

interface ToggleSwitchProps {
  isOn?: boolean;
  onToggle?: (isOn: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn = false,
  onToggle,
}) => {
  const [toggleState, setToggleState] = useState(isOn);

  const handleToggle = () => {
    setToggleState(!toggleState);
    if (onToggle) onToggle(!toggleState);
  };

  return (
    <ToggleContainer>
      <ToggleInput
        type="checkbox"
        checked={toggleState}
        onChange={handleToggle}
      />
      <Slider isOn={toggleState} onClick={handleToggle} />
    </ToggleContainer>
  );
};

export default ToggleSwitch;
