import { render, screen, waitFor } from "@testing-library/react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "util/history";
import Catalog from "..";
import { server } from "./fixtures"


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers());
afterAll(() => server.close())

test('should render Catalog with products', async () => {
    //ARRANGE
    //ACT
    render(
        <HistoryRouter history={history}>
            <Catalog />
        </HistoryRouter>
    );

    //ASSERT
    expect(screen.getByText('Catálogo de produtos')).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText('PC Gamer Max')).toBeInTheDocument();
    });



})