import { gql } from '@apollo/client';

export const GET_ME = gql`
{ 
    type Query { 
        me: User
        {
            _id: ID
            username: String
            email: String
            bookCount: Int
            savedBooks: [Book]
        }
    }
}`