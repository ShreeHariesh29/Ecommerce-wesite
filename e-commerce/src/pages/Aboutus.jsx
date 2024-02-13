import React, {  useState } from 'react'
import { useContext } from 'react';
import UserContext from '../Hook component/UserContext';

import '../App.css'
// import ReactPaginate from 'react-paginate';

function Aboutus() {
    
    const value = useContext(UserContext)
    const [cartData, setCartData] = value;
    const [Price, setPrice] = useState(1)
    
    const CartValue =()=>{
        console.log(cartData)
    }
    const [currentPage, setCurrentPage] = useState(0);

  // Sample data for the table
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 1, name: 'John Doe', age: 30 },

  ];

  // Number of items to display per page
  const itemsPerPage = 5;

  // Calculate the total number of pages
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Function to handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate start and end indices for pagination
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get data for the current page
  const currentPageData = data.slice(startIndex, endIndex);

    const [num , setNum] = useState(1)

    const tableCellStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
      };
 
  
    
   

  return (
    <div>
     {/* {cartData.map(cartitem =>(
        <div key={cartitem._id} style={{display:'flex',justifyContent:'space-between',border:'1px gray solid',marginLeft:'20px',marginRight:'20px', borderRadius:'10px'}}>
        <div style={{ width:'70%',height:'150px',display:'flex'}}>
            <img style={{margin:'10px 0px 0px 30px',width:'100px',height:'120px'}} src={cartitem.image} alt="" />
            <p>{cartitem.title}</p>
            <div>
            <button onClick={UpdatePrice(1)} style={{height:'30px',width:'20px'}}>+</button>
            {num}
            <button onClick={UpdatePrice()} style={{height:'30px',width:'20px'}} >-</button>
            </div>
            

        </div>
       
    </div>
    ))} */}
    
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>ID</th>
            <th style={tableCellStyle}>Name</th>
            <th style={tableCellStyle}>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((row) => (
            <tr key={row.id}>
              <td style={tableCellStyle}>{row.id}</td>
              <td style={tableCellStyle}>{row.name}</td>
              <td style={tableCellStyle}>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </div>
  )
  
}

export default Aboutus