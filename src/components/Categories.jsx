import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {setCategory} from "../redux/actions/filtersAC";

/*class Categories extends  React.Component{
    state={
        activeItem: null,
    };
    onSelectItem(index){
        this.setState({activeItem: index})
    }
    click(name, index){
        this.props.clickOnCatefories(name)
        this.onSelectItem(index)
    }
    render(){
        const {items, clickOnCatefories}=this.props;

        return (
            <div className="categories">
                <ul>
                    {items.map((name, index)=><li key={`${name}_${index}`}
                                                  onClick={()=>this.click(name, index)}
                                                  className={this.state.activeItem===index ? "active" : ''}
                    >{name}</li>)}
                </ul>
            </div>
        )
    }
}*/

const Categories = React.memo(function Categories({items, pizzas}) {
    console.log(pizzas.length)
        const dispatch = useDispatch();
        const [activeItem, setActiveItem] = useState(0)

        const onSelectItem = React.useCallback((index) => {
            setActiveItem(index)
            dispatch(setCategory(index))
            // console.log(index)
        }, [])
        return (
            <div className="categories">
                <ul>
                    {items && items.map((name, index) => <li key={`${name}_${index}`}
                                                             onClick={() => onSelectItem(index)}
                                                             className={activeItem === index ? "active" : ''}
                    >{name}</li>)}
                </ul>
                {pizzas.length ===0 && <h1>enter into the console npm run server</h1>}
            </div>
        )
    }
)

export default Categories