function LastTask(){
    
const typeText = (e) => {console.log(e.target.value);}

    return(
        <>
        <form>
            <label htmlFor="Wish">Write your wish</label>
            <input type="text" onChange={typeText} />

        </form>
        </>
    )
}

export default LastTask