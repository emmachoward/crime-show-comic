import { render, screen } from "@testing-library/react";
import Logo from './Logo.js'
import { BrowserRouter } from "react-router-dom";

describe("Logo Tests", () => {
    test('Logo renders "Crime Show" as title', () => {
        render(<BrowserRouter><Logo /></BrowserRouter>);
        const logoTitle = screen.getByText("Crime Show");
        expect(logoTitle).toBeInTheDocument();
    });
    
});

