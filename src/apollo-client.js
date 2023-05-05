import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri: 'https://miniproject-nindya.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'PAN7smwtUaeCjpBmqwzUxRBGJNMae68O8lN6XBLGY4gmEM3Jkej0d6bTj7OodpY7'
    }
})

export default client