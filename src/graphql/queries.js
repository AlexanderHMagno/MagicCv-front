import {gql} from '@apollo/client';



export const GET_POSTS = gql`
        query {
            getPosts {
                id body createdAt username user countsComments countsLikes
                comments { id body createdAt user}
                likes {username}
            }
        }
    `;


export const GET_PROFILE = gql`
    query getProfile ($userId:ID!) { 
        getProfile (userId:$userId) {
            id
            first
            last
            bio
            role  
            city
            country 
            picture_url 
            phone 
            address 
            experience {
                id title typeExp company location current
                startMonth startYear endMonth endYear
                description createdAt
                }
            education  {
                id school  degree field  endYear
                startYear description  order  createdAt
                }
        
            volunteer  {
                id organization  role location current startMonth
                startYear endMonth endYear description 
                order  createdAt
                }
            skills  {
                id label rate
                }
    }
    }
`;
