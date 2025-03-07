import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting.tsx";

test('Display greeting', () => {
    render(<Greeting/>);

    expect(screen.getByText('Hi there!')).toBeInTheDocument();
});
