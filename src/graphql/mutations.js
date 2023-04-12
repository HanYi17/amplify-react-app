import { gql } from "@apollo/client";

export const createNote = gql`
  mutation CreateItem($input: ItemInput!) {
    createItem(input: $input) {
      id
      title
      description
    }
  }
`;

export const deleteNote = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;
