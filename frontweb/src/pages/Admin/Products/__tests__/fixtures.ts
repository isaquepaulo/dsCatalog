import { rest } from "msw";
import { setupServer } from 'msw/node'
import { BASE_URL } from "util/request";

const findCategoriesResponse = {
    content: [
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 1,
            name: "Livros"
        }
    ],
    pageable: {
        sort: {
            sorted: true,
            unsorted: false,
            empty: false
        },
        offset: 0,
        pageNumber: 0,
        pageSize: 12,
        paged: true,
        unpaged: false
    },
    last: true,
    totalPages: 1,
    totalElements: 3,
    size: 12,
    number: 0,
    sort: {
        sorted: true,
        unsorted: false,
        empty: false
    },
    first: true,
    numberOfElements: 3,
    empty: false
};

const saveProductResponse = {

    "id": 3,
    "name": "Macbook Pro",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 1250.0,
    "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg",
    "date": "2020-07-14T10:00:00Z",
    "categories": [
        {
            "id": 3,
            "name": "Computadores"
        }
    ]

}

export const server = setupServer(
    rest.get(`${BASE_URL}/categories`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(findCategoriesResponse)
        );
    }),

    rest.post(`${BASE_URL}/products`, (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json(saveProductResponse)
        );
    }),




)
