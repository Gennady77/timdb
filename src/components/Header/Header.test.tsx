// @ts-ignore
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { fireEvent, screen } from '@testing-library/react';

let container: HTMLDivElement | null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    if(!container) {
        return;
    }

    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should be true', async function() {
    await act(async () => {
        render(<Provider store={store}><Header /></Provider>, container || null);
    });

    fireEvent.click(screen.getByRole('button', {name: '+'}));

    expect(store.getState().laptopModal.shown).toBeTruthy();
});