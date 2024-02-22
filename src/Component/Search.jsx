import logo from "../assets/logo.png";

const Search = () => {
  return (
    <>
      <div className=" flex" >
     <div className="mt-7 " ><p className="text-wrap mb-0  ml-9 text-xl font-bold text-blue-800 md:text-2xl lg:text-xl">
  Harmonize Body, Mind,<br /> and Spirit:<br /> Find Your Inner Peace with Yoga.
</p>
<input
            type="text"
            placeholder="Search"
            className="input ml-8 mt-4 input-bordered w-54 "
          /></div>  <div className=" flex  justify-evenly" ><img className=" mr-9 w-1/5" src={logo} alt="" /></div>



      </div>
     
   
    </>
  );
};

export default Search;
