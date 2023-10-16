import GlobalStyle from "@style/GlobalStyle";
import HomeScreen from "@page/HomeScreen";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; 

const queryClient = new QueryClient();

function App() {

  return (
    <>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle/>
				<HomeScreen/>
				<ReactQueryDevtools />
			</QueryClientProvider>
    </>
  )
}

export default App;
