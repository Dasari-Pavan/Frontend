
function Student(props){
  

        const mystyle={
            textAlign:"center",
            color:"blue"
        }
        return(
        <>
        <h1>Student Component</h1>
        <h1 style={mystyle}>name:{props.name}</h1>
        <h1 style={{backgroundColor:"cyan"}}>place:{props.place}</h1>
        </>
    )
}
export default Student
