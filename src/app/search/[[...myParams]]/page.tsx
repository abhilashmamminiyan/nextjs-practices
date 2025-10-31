export default function DynamicSearch(props: any){
    const myParams:string[] = props.params.myParams;
    const category = decodeURIComponent(myParams[0]);

    return <div>DynamicSearch : <h1>{category}</h1>
    </div>
}