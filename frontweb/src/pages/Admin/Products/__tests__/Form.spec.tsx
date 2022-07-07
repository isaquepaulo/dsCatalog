import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form";
import history from 'util/history';
import { useParams } from 'react-router-dom';
import { server } from "./fixtures";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import selectEvent from "react-select-event";
import { ToastContainer } from 'react-toastify';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn()
}));

describe('Product form create tests', () => {

    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({
            productId: 'create'
        })
    });

    test('should show toast and redirect when submit form correctly', async () => {
        render(
            <HistoryRouter history={history}>

                <Form />
            </HistoryRouter>
        );
        const nameInput = screen.getByTestId("name");
        const priceInput = screen.getByTestId("price");
        const imgUrlInput = screen.getByTestId("imgUrl");
        const descriptionInput = screen.getByTestId("description");
        const categoriesInput = screen.getByLabelText("Categorias");

        await selectEvent.select(categoriesInput, ['Eletrônicos', 'Computadores'])
        userEvent.type(nameInput, 'Computador');
        userEvent.type(priceInput, '5000.12');
        userEvent.type(imgUrlInput, 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg');
        userEvent.type(descriptionInput, 'Computador muito bom');
    });
});