// export function ParentComponent(){
//     interface somePropType {
//         firstname: string;
//         lastname: string;
//     }

//     const someProp: somePropType = {
//         firstname: 'foo',
//         lastname: 'bar'
//     }

//     return (
//         <ChildComponent someProp={someProp}/>
//     )
// }

// export function ChildComponent({ someProp }){
//     return (
//         <GrandchildComponent someProp={someProp}/>
//     )
// }

// export function GrandchildComponent({ someProp }){
//     return (
//         <div>{`${someProp.firstname} ${someProp.lastname}`}</div>
//     )
// }
