import { gql } from "@apollo/client";

export const listNotes = gql`
  query GetItems {
    items {
      id
      title
      description
    }
  }
`;
