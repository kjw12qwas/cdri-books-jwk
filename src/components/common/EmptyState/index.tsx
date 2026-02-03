import styled from 'styled-components';
import type { ReactNode } from 'react';
import theme from '../../../styles/theme';

interface EmptyStateProps {
    icon: ReactNode
    message: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.caption.fontSize};
`;

const EmptyState = ({ icon, message }: EmptyStateProps) => {
    return (
        <Wrapper>
            <IconWrapper>{icon}</IconWrapper>
            <Message>{message}</Message>
        </Wrapper>
    );
};

export default EmptyState;