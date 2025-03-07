import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting.tsx";
import "@testing-library/jest-dom";

describe('Greeting Component', () => {
    test('Greeting Text', ()=>{
        render(<Greeting/>);
        expect(screen.getByText('Hi there!')).toBeInTheDocument();
    })
});
