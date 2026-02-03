import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
    title: 'Common/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: '구매하기',
        style: { padding: '8px 20px', fontSize: '14px' },
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: '상세검색',
        style: { padding: '6px 12px', fontSize: '14px' },
    },
};

export const WithIcon: Story = {
    args: {
        variant: 'outline',
        children: '상세보기',
        rightIcon: <span>∨</span>,
        style: { padding: '6px 12px', fontSize: '14px' },
    },
};