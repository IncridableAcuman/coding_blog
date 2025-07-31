export default interface IPost{
    _id:string;
    title:string;
    description:string;
    author:string;
    image:string;
    category:string;
    tags:string[];
    createdAt:string
}