import { changeFilter } from '../../redux/filters/slice';
import { useDispatch } from 'react-redux';

export default function SearchBox() {
    const dispatch = useDispatch();
    return <>
        <p>Find contacts by name</p>
        <input onChange={(e) => { dispatch(changeFilter(e.target.value)) }} type="text" />
    </>;
}