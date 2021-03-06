import React,{useState,useEffect} from 'react'
import { Form,FormControl} from 'react-bootstrap';

  function Searching({data,setCurrentPage,setFilterList}) {
  const [value,setValue]=useState('');

  const filterCompetition=data.filter(index=>{
    return index.name.toLowerCase().includes(value.toLowerCase())
  });

  function handleOnchange(event){
    setValue(event.target.value);
    setCurrentPage(1);
  }

  useEffect(() => {
    setFilterList(filterCompetition);
  }, [data,value]);
  
  return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Поиск"
          className="me-2"
          aria-label="Search"
          onChange={(event)=>handleOnchange(event)}
        />
      </Form>
  )
}
export default Searching;
