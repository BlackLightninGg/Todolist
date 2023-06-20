import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import AppWithRedux from "../AppWithRedux";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

const meta: Meta<typeof AppWithRedux> = {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    tags: ['autodocs'],
    decorators: [ReduxStoreProviderDecorator]

};

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

export const AppWithReduxStory: Story = {
    // render: () => <Provider store={store}>
    //     <AppWithRedux/>
    // </Provider>
}