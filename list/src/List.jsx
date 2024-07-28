import PropTypes from 'prop-types'

function List(props)
{
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(items => <li key = {items.id}> {items.name}: &nbsp; <b>{items.calories} </b></li>);

    return(<><h3 className="list-category">{category}</h3><ol className="list-item">{listItems}</ol></>);



}
List.propTypes = {
    
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),


}

List.defaultProps = {
    
    category: "None",
    items: [],

}

export default List