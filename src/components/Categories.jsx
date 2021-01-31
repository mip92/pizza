import React, {useState} from 'react'

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

function Categories({items}) {
    const[activeItem, setActiveItem]=useState(0)
   // const[count, setCount]=useState(0)

    const onSelectItem=(index)=>{
        setActiveItem(index)
    //    setCount(count+1)
    }
    return (
        <div className="categories">
            <ul>
               {/*<h3>{count}</h3>*/}
                {items && items.map((name, index)=><li key={`${name}_${index}`}
                                              onClick={()=>onSelectItem(index)}
                                              className={activeItem===index ? "active" : ''}
                >{name}</li>)}
            </ul>
        </div>
    )
}

export default Categories