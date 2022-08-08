import { globalStyles } from '../shared/styles'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../src/lib/apollo-client'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      {globalStyles}
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
