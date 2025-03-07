import {render, screen, fireEvent} from "@testing-library/react";
import Counter from "./Counter.tsx";
import "@testing-library/jest-dom";

describe('Counter Component', () => {
    test('Initial count is zero', ()=>{
        render(<Counter/>);

        const count = screen.getByTestId('count');
        expect(count).toHaveTextContent('Count: 0');
    });

    test('Increment button increments count', ()=>{
        render(<Counter/>);

        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton)

        const count = screen.getByTestId('count');
        expect(count).toHaveTextContent('Count: 1');

        fireEvent.click(incrementButton)
        expect(count).toHaveTextContent('Count: 2');
    })
});
