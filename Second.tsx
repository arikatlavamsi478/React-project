import React from "react";

interface IProps{
    key1 : string;
    key2: number;
    key3: boolean;
    key4: any[];
}

interface IState{}

class Second extends React.Component<IProps,IState>{
      constructor(props:IProps){
          super(props);
      }
    render() {
        return (
            <React.Fragment>
                     <h1>{this.props.key1}</h1>
                     <h1>{this.props.key2}</h1>
                     <h1>{JSON.stringify(this.props.key3)}</h1>
                     <table>
                         <tr>
                             <th>Name</th>
                             <th>City</th>
                             <th>Country</th>
                         </tr>
                         {this.props.key4.map((element:any,index:number)=>(
                             <tr key={index}>
                                 <td>{index+1}</td>
                                 <td>{element.Name}</td>
                                 <td>{element.City}</td>
                                 <td>{element.Country}</td>
                             </tr>
                         ))}
                     </table>
            </React.Fragment>
        )
    }
}

export default Second;
