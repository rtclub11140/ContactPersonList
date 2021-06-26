import Layout from 'pages/Layout'
import { ThemeProvider } from '@material-ui/core/styles'
import 'antd/dist/antd.css';
import theme from 'theme/index';

function App() {
    
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>     
    </>
  )
}

export default App
