import Kanban from "../../../components/Kanban/Kanban";
import { render, screen } from "@testing-library/react";

describe("Kanban component", () => {    
    test("renders learn react link", () => {
        render(<Kanban />);
        const linkElement = screen.getByText("Kanban");
        expect(linkElement).toBeInTheDocument();
    });

    test("renders a card component", () => {
        render(<Kanban />);
        //get a element by class name
        const cardElement = screen.findAllByAltText(/item/i);
        expect(cardElement).toBeDefined()
    })

});
    