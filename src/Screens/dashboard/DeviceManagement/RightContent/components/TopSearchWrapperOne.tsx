import React from 'react';
import styled from 'styled-components';
import { MdSmartphone } from 'react-icons/md';
import { MdComputer } from 'react-icons/md';
import { useModal } from '../../../../../utils/hook';
import { Modal } from '../../../../../Components/modal/Modal';

export const TopSearchWrapperOne = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [modalContent, setModalContent] = React.useState<string>('');

  const handleOpenModal = (content: string) => {
    setModalContent(content);
    openModal();
  };

  return (
    <MainWrapper>
      <MobileWrapper onClick={() => handleOpenModal('Mobile Content')}>
        <IconWrapper>
          <MdSmartphone style={{ fontSize: '25px' }} />
        </IconWrapper>
        <Text>Mobile</Text>
      </MobileWrapper>
      <ComputerWrapper onClick={() => handleOpenModal('Computer Content')}>
        <IconWrapper>
          <MdComputer style={{ fontSize: '25px' }} />
        </IconWrapper>
        <Text2>Computer</Text2>
      </ComputerWrapper>

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
const ModalContentHeader = styled.h3`
  color: lightgray;
  text-align: center;
`;
const ModalText = styled.p`
  color: lightgray;
  text-align: center;
  width: 300px;
`;

const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

const ComputerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #e6f7ff;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const IconWrapper = styled.div``;

const Text = styled.p`
  font-weight: 500;
  margin-top: 20px;
`;

const Text2 = styled.p`
  font-weight: 500;
  margin-top: 20px;
  color: blue;
`;
