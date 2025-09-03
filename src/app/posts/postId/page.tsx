import Image from "next/image";

export default function GetDetails({
  params 
}:{
  params : {PostID : string}
}){
  const {PostID} = params
  return (
    <h1>{PostID}</h1>
  );
}
