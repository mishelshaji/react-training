import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting.tsx";

describe('Greeting Component', () => {
    test('Checking greeting message', ()=> {
        render(<Greeting/>);
        expect(screen.getByText('Hi there!')).toBeInTheDocument();
    })
});
