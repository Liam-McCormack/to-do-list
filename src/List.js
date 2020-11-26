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
                            {/* <p>Urgency: {item.urgency}</p> */}
                            <select name='urgency'>
                                <option value='0'>Please select an urgency:</option>
                                <option value='1'>RIGHT NOW PAL</option>
                                <option value='2'>Pretty damned urgent</option>
                                <option value='3'>Do your best</option>
                                <option value='4'>When you can</option>
                                <option value='5'>If you fancy</option>
                            </select>
                            <button type='text' onClick={() => props.deleteTask(index)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default list;