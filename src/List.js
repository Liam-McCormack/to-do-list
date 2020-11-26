import './App'

const list = (props) => {

    return (
        <div>
            <ul>
                {props.items.map((item, index) => {
                    return (
                        <li key={item.title}>
                            <p>{item.title}</p>
                            <p onClick={() => props.checkBox(index)}>{item.status}</p>
                            <p>Urgency: {item.urgency}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default list;