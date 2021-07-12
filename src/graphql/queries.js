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
            templates 
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


export const GET_TEMPLATE = gql`
query getTemplate ($templateId:ID) { 
    getTemplate (templateId:$templateId)  {
        id
        title
        image
        original
        order
        config	{
            avatar
            template
            settings {
                Background {
                    color
                    font
                    size
                    position
                }
                Back1 {
                    color
                    font
                    size
                    position
                }
                Back2 {
                    color
                    font
                    size
                    position
                }
                Back3 {
                    color
                    font
                    size
                    position
                }
                Back4 {
                    color
                    font
                    size
                    position
                }
                Main {
                    color
                    font
                    size
                    position
                }
                LeftTitle {
                    color
                    font
                    size
                    position
                }
                LeftText {
                    color
                    font
                    size
                    position
                }
                Name {
                    color
                    font
                    size
                    position
                }
                Title {
                    color
                    font
                    size
                    position
                }
                Subtitle {
                    color
                    font
                    size
                    position
                }
                Text {
                    color
                    font
                    size
                    position
                }
                Extra {
                    color
                    font
                    size
                    position
                }

            }
        }
    }
}
`


export const GET_TEMPLATES = gql`
query getTemplates ($userId:ID) { 
    getTemplates (userId:$userId) {
        id
        title
        image
        original
        order
        config	{
            avatar
            template
            settings {
                Background {
                    color
                    font
                    size
                    position
                }
                Back1 {
                    color
                    font
                    size
                    position
                }
                Back2 {
                    color
                    font
                    size
                    position
                }
                Back3 {
                    color
                    font
                    size
                    position
                }
                Back4 {
                    color
                    font
                    size
                    position
                }
                Main {
                    color
                    font
                    size
                    position
                }
                LeftTitle {
                    color
                    font
                    size
                    position
                }
                LeftText {
                    color
                    font
                    size
                    position
                }
                Name {
                    color
                    font
                    size
                    position
                }
                Title {
                    color
                    font
                    size
                    position
                }
                Subtitle {
                    color
                    font
                    size
                    position
                }
                Text {
                    color
                    font
                    size
                    position
                }
                Extra {
                    color
                    font
                    size
                    position
                }

            }
        }
    }
}
`

export const CREATE_TEMPLATE = gql`
mutation templateCreateMutation
    (
        $title: String
        $category: String
        $image: Upload
        $config: String
        
    )
    { 
      templateCreateMutation (templateInput : {
            title: $title
            category: $category
            config: $config
            image: $image
        }) {
        id
        title
        image
        original
        order
        config	{
            avatar
            template
            settings {
                Background {
                    color
                    font
                    size
                    position
                }
                Back1 {
                    color
                    font
                    size
                    position
                }
                Back2 {
                    color
                    font
                    size
                    position
                }
                Back3 {
                    color
                    font
                    size
                    position
                }
                Back4 {
                    color
                    font
                    size
                    position
                }
                Main {
                    color
                    font
                    size
                    position
                }
                LeftTitle {
                    color
                    font
                    size
                    position
                }
                LeftText {
                    color
                    font
                    size
                    position
                }
                Name {
                    color
                    font
                    size
                    position
                }
                Title {
                    color
                    font
                    size
                    position
                }
                Subtitle {
                    color
                    font
                    size
                    position
                }
                Text {
                    color
                    font
                    size
                    position
                }
                Extra {
                    color
                    font
                    size
                    position
                }

            }
        }
    }
}
`