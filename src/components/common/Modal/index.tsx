import styled from 'styled-components';
import type { ReactNode } from 'react';
import theme from '../../../styles/theme';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Content = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 14px 6px rgba(151, 151, 151, 0.15);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  background: none;
  border: none;
  color: ${theme.colors.text.subtitle};
`;

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        {children}
      </Content>
    </Overlay>
  );
};

export default Modal;