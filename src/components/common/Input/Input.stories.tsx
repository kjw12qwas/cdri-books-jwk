import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';
import { FiSearch } from 'react-icons/fi';

const meta: Meta<typeof Input> = {
    title: 'Common/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithIcon: Story = {
    args: {
        leftIcon: <FiSearch />,
        placeholder: '검색어를 입력하세요',
    },
};

export const Plain: Story = {
    args: {
        placeholder: '검색어 입력',
    },
};