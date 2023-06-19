import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import React, {FC, useState} from "react";
import {EditableSpan, EditableSpanPropsType} from "../EditableSpan";

const meta: Meta<typeof EditableSpan> = {
    title: 'Todolist/EditableSpan',
    component: EditableSpan,
    tags: ['autodocs'],
    args: {
        onChange: action("onChange"),
        value: "Text"
    },
};

export default meta;
type Story = StoryObj<typeof EditableSpan>;

export const EditableSpanStory: Story = {};

export const EditableSpanWithChangeTitleStory: FC<EditableSpanPropsType> = (args) => {
    let [title, setTitle] = useState(args.value);
    const changeTitle = (newValue: string) => {
        setTitle(newValue)
    }

    return <EditableSpan value={title} onChange={changeTitle}/>
}