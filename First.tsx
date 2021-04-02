import React from "react";
import Second from "./Second";

interface IState {
    key1: string;
    key2: number;
    key3: boolean;
    key4: any[];
}

interface IProps{}

class First extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            key1: "Hello",
            key2: 200,
            key3: false,
            key4: [{"Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany"},
                {"Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico"},
                {"Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico"},
                {"Name": "Around the Horn", "City": "London", "Country": "UK"},
                {"Name": "B's Beverages", "City": "London", "Country": "UK"},
                {"Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden"},
                {"Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany"},
                {"Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France"},
                {"Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain"},
                {"Name": "Bon app'", "City": "Marseille", "Country": "France"},
                {"Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada"},
                {"Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina"},
                {"Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico"},
                {"Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland"},
                {"Name": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil"}]
        }
    }

    render() {
        return (
            <React.Fragment>
                <Second key1={this.state.key1}
                        key2={this.state.key2}
                        key3={this.state.key3}
                        key4={this.state.key4}></Second>
            </React.Fragment>
        )
    }
}

export default First;
