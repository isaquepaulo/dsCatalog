import { render, screen, waitFor } from "@testing-library/react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "util/history";
import Catalog from "..";

test('should render Catalog', async () => {
    //ARRANGE
    const text = 'Fazer Login';
    //ACT
    render(
        <HistoryRouter history={history}>
            <Catalog />
        </HistoryRouter>
    );

    //ASSERT
    expect(screen.getByText('Catálogo de produtos')).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText('Smart TV')).toBeInTheDocument();
    });



})