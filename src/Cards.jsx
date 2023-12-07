function Card(props){
   const ustate=()=> {
      console.log("hello world");
   }

    if(!props.person.shows){
      return(
        <p style={{fontSize:"20px"}}>Not Found!!</p>
      );
    }
    // ?
    return(
        <div
      className="card rounded-xl w-72 bg-white shadow-xl flex justify-start items-center gap-2 flex-col overflow-hidden"
    >
      <div className="w-full h-40 bg-sky-600 flex p-4 justify-center items-center">
        <img
          src={props.person.imgSrc}
          alt=""
          className="aspect-square rounded-full h-full object-cover"
        />
      </div>
      <div
        className="text-content p-2 w-full flex text-center flex-col gap-2 justify-center items-center"
      >
        <h1 className="text-2xl font-bold">{props.person.fullName}</h1>
        <p className="text-gray-500">
          {props.person.bio}
        </p>
        <button
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md shadow-md"
        >
          {/* ADD  onClick={ustate}*/}
          <a href="#" onClick={ustate}>View Profile</a>
        </button>
      </div>
    </div>
    );
}

export default Card;