import Layout from 'modules/ui/components/Layout'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import 'antd/dist/antd.css';

function App() {
    const theme = createMuiTheme({
      palette: {
      // type: 
      primary: {
        main : '#FFFFFF'
      }
    }
  })
  return (
    <>
      <ThemeProvider theme={theme}>
       <Layout></Layout>
      </ThemeProvider>
     
    </>
  )
}

export default App
