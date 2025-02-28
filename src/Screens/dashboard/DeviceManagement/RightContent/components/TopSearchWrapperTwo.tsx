import React from 'react';
import styled from 'styled-components';
import { FaWindows } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { FaLinux } from 'react-icons/fa';
import { useModal } from '../../../../../utils/hook';
import { Modal } from '../../../../../Components/modal/Modal';

export const TopSearchWrapperTwo = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [modalContent, setModalContent] = React.useState<string>('');

  const handleOpenModal = (content: string) => {
    setModalContent(content);
    openModal();
  };
  return (
    <MainWrapper>
      <WindowsWrapper onClick={() => handleOpenModal('Windows Content')}>
        <IconWrapper>
          <FaWindows style={{ fontSize: '25px', color: '#1890ff' }} />
        </IconWrapper>
        <Text>Windows</Text>
      </WindowsWrapper>
      <Mac>
        <IconWrapper>
          <FaApple style={{ fontSize: '25px' }} />
        </IconWrapper>
        <Text2>Mac</Text2>
      </Mac>
      <Linux>
        <IconWrapper>
          <FaLinux style={{ fontSize: '25px' }} />
        </IconWrapper>
        <Text2>Linux</Text2>
      </Linux>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalContentHeader>{modalContent}</ModalContentHeader>
        <ModalText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </ModalText>
      </Modal>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: white;
  padding: 10px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  gap: 15px;
`;
const WindowsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #e6f7ff;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const Mac = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Linux = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const IconWrapper = styled.div``;

const Text = styled.p`
  font-weight: 500;
  margin-top: 20px;
  color: #1890ff;
`;
const Text2 = styled.p`
  font-weight: 500;
  margin-top: 20px;
`;

const ModalContentHeader = styled.h3`
  color: lightgray;
  text-align: center;
`;
const ModalText = styled.p`
  color: lightgray;
  text-align: center;
  width: 300px;
`;
