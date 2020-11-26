import './App'

const list = (props) => {
    return (
        <div>
            <ul>
                {props.items.map(item => {
                    return (
                        <li key={item.title}>
                            <p>{item.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default list;