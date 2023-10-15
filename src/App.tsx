import GlobalStyle from "@style/GlobalStyle";
import HomeScreen from "@page/HomeScreen";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle/>
				<HomeScreen/>
			</QueryClientProvider>
    </>
  )
}

export default App;
