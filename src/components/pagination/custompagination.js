import { Pagination, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

const darkTheme=createTheme({
    palette: {
      mode: "dark",
    },
  });


export default function CustomPagination({ setPage, numOfPages = 100 }){

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
      };

  return (
    <div>
        <ThemeProvider theme={darkTheme}>
            <br></br>
        <Pagination 
       onChange={(e) => handlePageChange(e.target.textContent)}
       count={numOfPages}
       variant="outlined" 
       color="primary"
      />
        </ThemeProvider>
      
    </div>
  )
}


