import type { Meta, StoryObj } from '@storybook/react';
import EmptyState from './index';

const meta: Meta<typeof EmptyState> = {
    title: 'Common/EmptyState',
    component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const NoResults: Story = {
    args: {
        icon: <span style={{ fontSize: '40px' }}>📚</span>,
        message: '검색된 결과가 없습니다.',
    },
};

export const NoLiked: Story = {
    args: {
        icon: <span style={{ fontSize: '40px' }}>📚</span>,
        message: '찜한 책이 없습니다.',
    },
};