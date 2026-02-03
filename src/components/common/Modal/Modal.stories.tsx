import type { Meta, StoryObj } from '@storybook/react';
import Modal from './index';

const meta: Meta<typeof Modal> = {
    title: 'Common/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        isOpen: true,
        onClose: () => { },
        children: (
            <div style={{ padding: '24px', width: '360px' }}>
                <p>상세검색 모달 내용</p>
            </div>
        ),
    },
};